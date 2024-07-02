import express from 'express'
import models from '../../models.js';

const router = express.Router();

router.post('/get-user', async (req, res) => {
  try {
    const {email} = req.body;
    const users = await models.User.findOne({email});

    if(!users) {
      res.status(400).text('User doesn\'t exist in the database');
    } else {
      res.status(200).json(users);
    }
  } catch (error) {
    console.error('Error retrieving users:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/add', async (req, res) => {
  try {
    const {email, firstName, lastName, username} = req.body;
    const existingUser = await models.User.findOne({email});

    if (!existingUser) {
      const newUser = new models.User({email, firstName, lastName, username});
      await newUser.save();
      res.status(200).send('New user added successfully');
    }

  } catch(err) {
    console.error('Error adding users:', err);
    res.status(500).send('Internal Server Error');
  }
});

export default router;