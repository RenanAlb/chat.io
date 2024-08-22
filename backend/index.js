const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http');
const jwt = require('jsonwebtoken');
const socketIo = require('socket.io');
const connectToMongoDB = require('./database/mongodb');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path');


// Rotas.js
const usersRouter = require('./routes/users');

// Configuração dotenv
dotenv.config();

// Models
const User = require('./models/users');
const Mensagem = require('./models/mensagens');

// Criar servidor
const app = express();
const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: 'https://chat-io-frontend.onrender.com',
    methods: ['GET', 'POST']
  }
});
app.use(cookieParser());

// Middlewares
app.use(cors({origin: 'https://your-frontend-url.com', credentials: true}));
app.use(express.json());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static('public/images'));

// Storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + '_' + Date.now() + path.extname(file.originalname));
  }
});

// Upload
const upload = multer({ storage: storage });

// Conexão ao MongoDB
connectToMongoDB();

// Rotas
app.use('/users', usersRouter);
app.get('/pesquisa/:termo', async (req, res) => {
  const termo = req.params.termo;
  const usuarios = await User.find({ nome: { $regex: termo, $options: 'i'} });
  res.status(200).json({ message: usuarios, ok: true });
});
app.post('/mensagens-antigas', async (req, res) => {
  try {
    const { de, para } = req.body;

    if (!de || !para) {
      return res.status(400).json({ mensagem: 'Parâmetros de solicitação inválidos', ok: false });
    }

    const findMensagensDe = await Mensagem.find({ de, para });

    const findMensagensInverse = await Mensagem.find({ para: de, de: para });

    const mensagens = findMensagensDe.concat(findMensagensInverse);

    const mensagensOrdenadas = mensagens.sort((a, b) => new Date(a.data) - new Date(b.data));

    res.status(200).json({ mensagem: 'Mensagens buscadas', ok: true, mensagens: mensagensOrdenadas });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensagem: 'Erro ao buscar mensagens', ok: false });
  }
});
app.post('/users-talk', async (req, res) => {
  try {
    const { data } = req.body;
    console.log('data', data);

    if (data) {
      const findUsers = await Mensagem.find({ de: data });
      console.log('FIND', findUsers);

      if (!findUsers) {
        return res.status(500).json({ message: 'Sem usuários', ok: false });
      }

      const uniqueUserIds = findUsers
      .map(mensagem => mensagem.para)
      .filter((id, index, self) => self.indexOf(id) === index);

      const uniqueUsers = await User.find({ _id: { $in: uniqueUserIds } }, 'nome email imagemPerfil');

      return res.status(200).json({ message: 'Usuários buscados com sucesso', ok: true, content: uniqueUsers });
    } else {
      return res.status(500).json({ message: 'Dados não recebidos', ok: false });
    }
  } catch(error) {
    console.error(error);
    res.status(500).json({ message: error, ok: false });
  }
});

// Get imagem de perfil
app.post('/image', upload.single('data'), async (req, res) => {
  let imagemPerfil = '';

  console.log('REQ.FILE', req.file);

  if (req.file) {
    if (req.file.mimetype.startsWith('image/')) {
      imagemPerfil = req.file.filename;
    } else {
      console.error('Tipo de arquivo não suportado: ', req.file.mimetype)
      return res.status(400).json({ message: 'Tipo de arquivo não suportado' })
    }

    const userId = req.body.id;

    const image = await User.findOneAndUpdate(
      { _id: userId },
      { imagemPerfil: imagemPerfil },
      { new: true }
    );

    res.status(201).json({ message: 'Imagem salva com sucesso', ok: true, imagemPerfil: image.imagemPerfil });
  } else {
    console.error('Nenhum arquivo selecionado')
    return res.status(400).json({ message: 'Nenhum arquivo selecionado', ok: false })
  }
});


// Configuração Socket.io
var users = [];

io.on('connection', (socket) => {
  console.log('Cliente conectado:', socket.id);
  console.log('array', users)

  socket.on('register', (id) => {
    const existingUserIndex = users.findIndex((user) => user.id === id);

    if (existingUserIndex !== -1) {
      users[existingUserIndex].socketId = socket.id;
    } else {
      users.push({ id: id, socketId: socket.id });
    }

    console.log('Usuários registrados:', users);
    console.log(`${id} registrado com o ID: ${socket.id}`);
  });

  socket.on('sendMessage', async ({ de, para, mensagem }) => {
    const targetUser = users.find((user) => user.id == para);

    if (targetUser) {
      await Mensagem.create({ de, para, mensagem });
      console.log(`Enviando mensagem para ${targetUser.socketId}`);
      io.to(targetUser.socketId).emit('receiveMessage', { de, para, mensagem });
    } else {
      await Mensagem.create({ de, para, mensagem });
    }
});

  socket.on('disconnect', () => {
    users = users.filter((user) => user.socketId !== socket.id)
    console.log(`Cliente desconectado: ${socket.id}`);
  });
});

// Iniciar servidor
server.listen(port, () => console.log(`Servidor ativo em http://localhost:${port}`));