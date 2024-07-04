import express from 'express';
import dotenv from 'dotenv';
import nocache from 'nocache';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import 'dotenv/config'
import apiRouter from './routes/routes.js';
import models from './models.js';

dotenv.config();
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.json());
app.use(nocache());

app.use((req, res, next) => {
  res.contentType("application/json; charset=utf-8");
  next();
});

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN_URL,
    methods: ["GET"],
    allowedHeaders: ["Authorization", "Content-Type"],
    maxAge: 86400,
  })
);

// mongodb middleware
app.use((req, res, next) => {
  req.models = models;
  next();
});

app.use('/chatbot', apiRouter);

const PORT = 3001 || process.env.PORT
app.listen(PORT);
export default app;
