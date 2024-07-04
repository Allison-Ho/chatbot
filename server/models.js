import mongoose from "mongoose";

let models = {};

main().catch(err => console.error(err));

async function main() {
  console.log('Connecting to database...');
  await mongoose.connect(`mongodb+srv://qnho:${process.env.MONGO_PW}@chatbot.avgrpeh.mongodb.net/chatbot`);
  console.log('...Success!');

  const UserSchema = new mongoose.Schema({
    email: String,
    firstName: String,
    lastName: String,
    username: String
  });

  const ConversationSchema = new mongoose.Schema({
    participants: [mongoose.ObjectId]
  });

  const MessageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    sentTime: {type: Date, default: Date.now},
    content: String,
    convoId: mongoose.ObjectId
  });

  models.User = mongoose.model('User', UserSchema);
  models.Conversation = mongoose.model('Conversation', ConversationSchema);
  models.Message = mongoose.model('Message', MessageSchema);
  console.log('Models created');
}

export default models;