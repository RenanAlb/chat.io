const express = require('express');
const User = require('../models/users');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  console.log('token:', token)

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado. Token não encontrado.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: 'Token inválido' });
  }
};

router.post('/cadastro', async (req, res) => {
  try {
    const { nome, email, senha } = req.body;
    const verificarUser = await User.findOne({ email });

    if (verificarUser) {
      return res.status(200).json({ message: 'Usuário já existente!', ok: false });
    }

    const hash = await bcrypt.hash(senha, 13);

    const newUser = await User.create({ nome, email, senha: hash });

    const token = jwt.sign({ id: newUser._id, nome: newUser.nome, email: newUser.email, imagemPerfil: newUser.imagemPerfil }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.status(200).json({ message: 'Usuário criado com sucesso!', ok: true, content: newUser, token: token });
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: error, ok: false });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;
    console.log('email:', email);

    const getUser = await User.findOne({ email });

    if (!getUser) {
      return res.status(200).json({ message: 'Este usuário não tem uma conta!', ok: false });
    }

    const verificarSenha = await bcrypt.compare(senha, getUser.senha);

    if (!verificarSenha) {
      return res.status(200).json({ message: 'Senha incorreta!', ok: false });
    }

    const token = jwt.sign({ id: getUser._id, nome: getUser.nome, email: getUser.email, imagemPerfil: getUser.imagemPerfil }, process.env.JWT_SECRET, { expiresIn: '7d' });

    res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 7 * 24 * 60 * 60 * 1000});

    return res.status(200).json({ message: 'Usuário logado com sucesso!', ok: true, content: getUser });
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: error, ok: false });
  }
});

router.get('/perfil', authenticate, (req, res) => {
  if (req.user) {
    console.log(req.user);
  } else {
    return res.status(500).json({ message: 'Erro ao buscar os dados do usuário', ok: false });
  }

  res.status(200).json({ message: 'Dados bsucados com sucesso', ok: true, content: req.user });
});

module.exports = router;