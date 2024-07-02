import express from 'express';
import path, { dirname } from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import nocache from 'nocache';
import cors from 'cors';
import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';
import 'dotenv/config'
import apiRouter from './routes/routes.js';
import models from './models.js';

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());

const checkJwt = auth({
  audience: 'http://localhost:3001',
  issuerBaseURL: process.env.AUTH0_ISSUER_URL,
});

app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});

// mongodb middleware
app.use((req, res, next) => {
  req.models = models;
  next();
});

app.use('/chatbot', apiRouter);

// This route doesn't need authentication
app.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

// This route needs authentication
app.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});

const checkScopes = requiredScopes('read:messages');

app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
  });
});

const PORT = 3001 || process.env.PORT
app.listen(PORT);
export default app;
