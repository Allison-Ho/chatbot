import express from 'express'
import models from '../../models.js';
import validateAccessToken from '../../middleware/auth0_middleware.js';

const router = express.Router();

// get all conversation for a user
router.post('/', validateAccessToken, async (req, res) => {
  try {
    let convo = {};
    const {email} = req.body;
    let allConvo = await models.Conversation.find();
    let userId = await models.User.findOne({email});

    if(userId) {
      const conversations = allConvo.map(async (conversation) => {
        const convId = conversation._id;
        if (conversation.participants.includes(userId._id)) {
          let msg = await models.Message.findOne({ convoId: convId });
          convo[convId] = msg;
        }
      });

      await Promise.all(conversations);
      console.log(convo);
      res.json(convo);
    } else {
      res.status(400).type('text').send('User doesn\'t exist in the database');
    }
  } catch(err) {
    console.error('Error retrieving messages:', err);
    res.status(500).type('text').send('Internal Server Error');
  }
});

export default router;