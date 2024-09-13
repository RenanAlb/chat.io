import { ContainerConversas } from "./styles";
import profileImg from '../../assets/perfil.png';
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";
import { pesquisarServer, getUserServer, getUsersTalkServer } from "../../crud";
import { useTheme } from '../../context/ThemeContext';

const Conversas = ({ onSelectChat }) => {
  const { theme, toggleTheme } = useTheme();
  const [pesquisa, setPesquisa] = useState('');
  const [buscaPesquisa, setBuscaPesquisa] = useState([]);
  const [conversas, setConversas] = useState([]);
  const [dadosUser, setDadosUser] = useState('');

  const getUser = async () => {
    const response = await getUserServer();
    if (response.ok) {
      console.log(response);
      setDadosUser(response.content);
      getUsersTalk(response.content);
    } else {
      console.error(response);
    }
  };

  const pesquisar = async (e) => {
    setPesquisa(e);

    if (pesquisa.length > 0) {
      const response = await pesquisarServer(pesquisa);

      if (response.ok) {
        const filterMe = response.message.filter((e) => e._id !== dadosUser.id);
        console.log('filterMe', filterMe)
        setBuscaPesquisa(filterMe);
      } else {
        return [];
      }
    }
  };

  const getUsersTalk = async (data) => {
    const response = await getUsersTalkServer(data.id);

    if (response.ok) {
      const filterMe = response.content.filter((e) => e._id !== data.id);
      console.log('filterMe', filterMe)
      setConversas(filterMe);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    getUser();
  }, [])

  return (
    <ContainerConversas theme={theme}>
      <h1 style={{ color: theme == 'light' ? 'black' : ''}}>Conversas</h1>
      <input type="text" placeholder="Pesquisar..." onChange={(e) => pesquisar(e.target.value)} className={theme == 'light' ? 'light-input' : 'dark-input' } />
      {
        pesquisa == '' ?
        (
          <div className="conversas">
            <p className={theme == 'light' ? 'light-p' : 'dark-p'}>Suas conversas</p>
            {
              conversas.map((usuario, index) => (
                <div key={index} className="conversa" onClick={() => onSelectChat(usuario)} id={theme == 'light' ? 'light-conversas' : 'dark-conversas'}>
                   {
                  console.log(usuario)
                }
                  {
                    usuario.imagemPerfil ?
                    (<img src={`https://chat-io-jpz0.onrender.com/images/${usuario.imagemPerfil}`}  />)
                    :
                    (<img src={profileImg} alt="" />)
                  }
                  <div className="info">
                    <h4 style={{ color: theme == 'light' ? 'black' : '' }}>{usuario.nome == dadosUser.nome && usuario._id == dadosUser.id ? `${usuario.nome} (Você)` : usuario.nome}</h4>
                    <p style={{ color: theme == 'light' ? 'black' : '' }}>Conversa...</p>
                  </div>
                </div>
              ))
            }
          </div>
        )
        :
        (null)
      }
      {
        pesquisa !== '' && buscaPesquisa.length > 0 ?
        (
          <div className="conversas">
            <p className={theme == 'light' ? 'light-p' : 'dark-p'}>Buscas...</p>
            {
              buscaPesquisa.map((usuario, index) => (
                <div key={index} className="conversa" onClick={() => onSelectChat(usuario)} id={theme == 'light' ? 'light-conversas' : 'dark-conversas'}>
                  {
                    usuario.imagemPerfil ?
                    (<img src={`https://chat-io-jpz0.onrender.com/images/${usuario.imagemPerfil}`}  />)
                    :
                    (<img src={profileImg} alt="" />)
                  }
                  <div className="info">
                    <h4 style={{ color: theme == 'light' ? 'black' : '' }}>{usuario.nome == dadosUser.nome && usuario._id == dadosUser.id ? `${usuario.nome} (Você)` : usuario.nome}</h4>
                    <p style={{ color: theme == 'light' ? 'black' : '' }}>Conversa...</p>
                  </div>
                </div>
              ))
            }
          </div>
        )
        :
        (null)
      }
      {
        pesquisa.length > 0 && buscaPesquisa.length == 0 ?
        (
          <div className="conversas">
            <p className={theme == 'light' ? 'light-p' : 'dark-p'}>Nenhum resultado encontrado...</p>
          </div>
        )
        :
        (null)
      }
    </ContainerConversas>
  );
};

Conversas.propTypes = {
  onSelectChat: PropTypes.func
};

export default Conversas;