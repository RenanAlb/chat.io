import { Container } from "./styles";
import { useEffect, useState } from "react";
import Menu from "../../components/Menu";
import Conversas from "../../components/Conversas";
import Chat from "../../components/Chat";
import io from 'socket.io-client';
import { getUserServer } from "../../crud";
import { useNavigate } from "react-router-dom";

const socket = io('https://chat-io-jpz0.onrender.com', { withCredentials: true });

const Home = () => {
  const navigate = useNavigate();
  const [windows, setWindows] = useState(window.innerWidth);
  const [selectedChat, setSelectedChat] = useState(null);
  const [dadosUser, setDadosUser] = useState('');
  const [mensagens, setMensagens] = useState([]);

  console.log('mensagens', mensagens)

  const getUser = async () => {
    const response = await getUserServer();

    if (response.ok) {
      console.log(response.content);
      setDadosUser(response.content);
    } else {
      console.error(response);
      navigate('/');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindows(window.innerWidth);
    };

    getUser();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (dadosUser) {
      socket.emit('register', dadosUser.id);

      socket.on('receiveMessage', (msg) => {
        console.log('aqui', msg);

        setMensagens((prevMensagens) => {
          const mensagemExistente = prevMensagens.find(m => m.mensagem === msg.mensagem && m.de === msg.de);
          if (!mensagemExistente) {
            return [...prevMensagens, msg];
          }
          return prevMensagens;
        });
      });

      return () => {
        socket.off('receiveMessage');
      };
    }
  }, [dadosUser]);

  const sendMessage = (mensagem, para) => {
    console.log('sendMessage', mensagem, 'para', para);

    setMensagens((prevMensagens) => [...prevMensagens, { de: dadosUser.id, para, mensagem }]);

    socket.emit('sendMessage', { de: dadosUser.id, para, mensagem });
  };

  console.log('MENSAGENS', mensagens);

  console.log(selectedChat)

  return (
    <Container>
      <Menu/>
      <Conversas onSelectChat={setSelectedChat}/>
      {
        windows > 700 && !selectedChat ?
        (<Chat chat={selectedChat} onSendMessage={sendMessage} onSelectChat={setSelectedChat} mensagens={mensagens} talkUser={selectedChat}/>)
        :
        (
          selectedChat ?
          (<Chat chat={selectedChat} onSendMessage={sendMessage} onSelectChat={setSelectedChat} mensagens={mensagens} user={dadosUser.id} talkUser={selectedChat}/>)
          :
          (null)
        )
      }

    </Container>
  );
};

export default Home;