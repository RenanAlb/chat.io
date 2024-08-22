const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  email: { type: String, require: true },
  senha: { type: String, require: true },
  imagemPerfil: { type: String, require: false },
});

const User = mongoose.model('User', userSchema);

module.exports = User;