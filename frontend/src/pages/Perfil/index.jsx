import { Container } from "./styles";
import { getUserServer, changeImagePerfilServer } from "../../crud";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import profileImg from '../../assets/perfil.png';
import FazerLogin from "../../components/FazerLogin";

const Perfil = () => {
  const { theme, toggleTheme } = useTheme();
  const [dadosUser, setDadosUser] = useState(null);
  const [imageSrc, setImageSrc] = useState('');
  const [okImg, setOkImg] = useState(false);

  const getUser = async () => {
    const response = await getUserServer();
    if (response.ok) {
      console.log(response);
      setDadosUser(response.content);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const changeImage = async () => {
    if (imageSrc) {
      console.log('2', imageSrc, dadosUser.id);
      const response = await changeImagePerfilServer(imageSrc, dadosUser.id);
      if (response.ok) {
        console.log('3');
        console.log(response);
        setOkImg(true);
      } else {
        console.error(response);
      }
    }
  };

  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    console.log('filetype => ', file.type);
    console.log(file);

    if (file) {
      console.log('1');
      setImageSrc(file);
    } else {
      alert('Arquivo não encontrado!');
      console.error('Arquivo não encontrado!');
    }
  };

  useEffect(() => {
    if (imageSrc) {
      changeImage();
    }
  }, [imageSrc]);

  return(
    <Container theme={theme}>
      {
        okImg && (<FazerLogin onOkImg={setOkImg}/>)
      }
      <Link to="/home">
        <span className="material-symbols-outlined" id={theme == 'light' ? 'light-close' : 'dark-close'}>
          arrow_back
        </span>
      </Link>
      <div className="card-profile">
        {
          dadosUser &&
          (
            <div className="container-perfil">
              <div className="image">
                <img src={dadosUser.imagemPerfil ? `https://chat-io-jpz0.onrender.com/images/${dadosUser.imagemPerfil}` : `${profileImg}`} alt="Imagem de perfil do usuário" id={theme == 'light' ? 'light-img' : 'dark-img'} />
                <div>
                  <span className="material-symbols-outlined" id={theme == 'light' ? 'light-edit' : 'dark-edit'} title="Mudar foto de perfil">
                    edit
                  </span>
                  <input
                    accept="image/*"
                    multiple
                    type="file"
                    name="data"
                    onChange={handleFileSelect}
                  />
                </div>
              </div>
              <p className={theme == 'light' ? 'light' : 'black'}>{dadosUser.nome}</p>
              <strong>{dadosUser.email}</strong>
              <button onClick={toggleTheme} className={theme == 'light' ? 'light-button' : 'dark-button'}>
                {
                  theme == 'light' ?
                  ('Modo escuro')
                  :
                  ('Modo claro')
                }
              </button>
            </div>
          )
        }
      </div>
    </Container>
  );
};

export default Perfil;