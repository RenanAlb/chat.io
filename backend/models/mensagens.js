const mongoose = require('mongoose');

const mensagensSchema = new mongoose.Schema({
  de: { type: String, require: true },
  para: { type: String, require: true },
  mensagem: { type: String, require: true },
  data: { type: Date, default: Date.now }
});

const Mensagem = mongoose.model('Mensagem', mensagensSchema);

module.exports = Mensagem;