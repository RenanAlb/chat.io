const mongoose = require('mongoose');

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.USER_MONGODB}:${process.env.PASSWORD_MONGODB}@cluster0.v2y3e.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    console.log('Conectado ao MongoDB');
  } catch(error) {
    console.error(error);
  }
}

module.exports = connectToMongoDB;