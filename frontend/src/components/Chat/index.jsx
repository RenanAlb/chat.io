import { ContainerChat } from "./styles";
import { useState, useEffect, useRef } from "react";
import PropTypes from 'prop-types';
import { buscarMensagensServer } from "../../crud";
import { transformData } from "../../functions";
import { useTheme } from '../../context/ThemeContext';
import Themes from "../../Themes";
import profileImg from '../../assets/perfil.png';


const Chat = ({ chat, onSelectChat, onSendMessage, mensagens, user, talkUser }) => {
  const { theme } = useTheme();
  const [mensagem, setMensagem] = useState('');
  const [mensagensAntigas, setMensagensAntigas] = useState([]);
  const [windows, setWindows] = useState(window.innerWidth);

  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [chat, mensagens, mensagensAntigas]);

  const buscarMensagens = async () => {
    if (chat && user) {
      const response = await buscarMensagensServer(user, chat._id);

      if (response) {
        console.log('MONGO', response);
        setMensagensAntigas(response.mensagens);
      } else {
        console.error(response);
      }
    }
  };

  useEffect(() => {
    buscarMensagens();
  }, [chat, user]);

  useEffect(() => {
    const handleResize = () => {
      setWindows(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSend = () => {
    if (mensagem.trim()) {
      console.log(mensagem, chat._id);
      onSendMessage(mensagem, chat._id);
      setMensagem('');
    }
  };

  return (
    <ContainerChat theme={theme}>
      {
        chat ?
        (
          <>
            <div className="header-fixed-chat" id={theme === 'light' ? 'light-hfc' : 'dark-hfc'}>
              <div className="perfil">
                {
                  windows < 700 ?
                  (
                    <span className="material-symbols-outlined" onClick={() => onSelectChat(null)} style={{ color: theme === 'light' ? 'black' : '' }}>
                      arrow_back
                    </span>
                  )
                  :
                  null
                }
                <img src={talkUser.imagemPerfil ? `https://chat-io-jpz0.onrender.com/${talkUser.imagemPerfil}` : profileImg} alt="Imagem de perfil do usuário" />
                <p style={{ color: theme === 'light' ? 'black' : '' }}>{chat._id == user ? chat.nome + ' (Você)' : chat.nome }</p>
              </div>
            </div>
            <div className="container-chat" ref={chatRef}>
              {
                mensagensAntigas.length > 0 &&
                mensagensAntigas.map((mensagemAntiga, index) => (
                  <div key={index}>
                    {
                      user === mensagemAntiga.de ?
                      (
                        <div className="me" key={index}>
                          <div className="chat-message" id="me">
                            <p>{mensagemAntiga.mensagem}</p>
                            <strong style={{ color: theme === 'light' ? 'black' : '' }}>{ transformData(mensagemAntiga.data) }</strong>
                          </div>
                        </div>
                      )
                      :
                      (
                        <div className="you" key={index}>
                          <div className="chat-message" id="you" style={{ backgroundColor: theme === 'light' ? `${Themes.colors.light_white2}` : '' }}>
                            <p>{mensagemAntiga.mensagem}</p>
                            <strong style={{ color: theme === 'light' ? 'black' : '' }}>{ transformData(mensagemAntiga.data) }</strong>
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))
              }
              {
                mensagens &&
                mensagens.map((mensagemUser, index) => (
                  <div key={index}>
                    {
                      user === mensagemUser.de ?
                      (
                        <div className="me" key={index}>
                          <div className="chat-message" id="me">
                            <p>{mensagemUser.mensagem}</p>
                            <strong style={{ color: theme === 'light' ? 'black' : '' }}>{ transformData(new Date()) }</strong>
                          </div>
                        </div>
                      )
                      :
                      (
                        <div className="you" key={index}>
                          <div className="chat-message" id="you" style={{ backgroundColor: theme === 'light' ? `${Themes.colors.light_white2}` : '' }}>
                            <p>{mensagemUser.mensagem}</p>
                            <strong style={{ color: theme === 'light' ? 'black' : '' }}>{ transformData(new Date()) }</strong>
                          </div>
                        </div>
                      )
                    }
                  </div>
                ))
              }
            </div>
            <div className="send-message">
              <input type="text" placeholder="Mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} style={{ backgroundColor: theme === 'light' ? `${Themes.colors.light_white2}` : '', color: theme === 'light' ? 'black' : '' }} />
              <button>
                <span className="material-symbols-outlined" onClick={handleSend}>
                  arrow_right_alt
                </span>
              </button>
            </div>
          </>
        )
        :
        (<p style={{ color: theme === 'light' ? 'black' : '' }}>Inicie uma conversa</p>)
      }
    </ContainerChat>
  );
};

Chat.propTypes = {
  chat: PropTypes.object,
  onSelectChat: PropTypes.func,
  onSendMessage: PropTypes.func,
  mensagens: PropTypes.array,
  user: PropTypes.string,
  talkUser: PropTypes.object
};

export default Chat;
