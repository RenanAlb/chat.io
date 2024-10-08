import { useEffect, useState } from "react";
import { ContainerMenu } from "./styles";
import { Link } from "react-router-dom";
import { useTheme } from '../../context/ThemeContext';
import Themes from "../../Themes";
import { getUserServer } from '../../crud';
import profileImg from '../../assets/perfil.png';
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [windows, setWindows] = useState(window.innerWidth);
  const [dadosUser, setDadosUser] = useState(null);

  const getUser = async () => {
    const response = await getUserServer();
    if (response.ok) {
      setDadosUser(response.content);
    } else {
      console.error(response);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindows(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    getUser();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {
      dadosUser &&
        (
          <ContainerMenu theme={theme}>
          <div className="logo" onClick={() => navigate('/')}>
            {
              windows > 1246 ?
              (<h1 style={{ color: theme == 'light' ? 'black' : '' }}>Chat.io</h1>)
              :
              (<h1 style={{ color: theme == 'light' ? 'black' : '' }}>.iO</h1>)
            }
          </div>
          <div className="image-perfil">
            {
              windows < 1246 ?
              (<Link to="/perfil" className={theme == 'light' ? 'light-link' : 'dark-link'}>
                <img src={dadosUser.imagemPerfil ? `https://chat-io-jpz0.onrender.com/images/${dadosUser.imagemPerfil}` : profileImg} alt="" />
              </Link>)
              :
              (null)
            }
          </div>
          <nav>
            <ul>
                {
                  windows < 1246 ?
                  (null)
                  :
                  (
                    <Link to="/perfil" className={theme == 'light' ? 'light-link' : 'dark-link'}>
                      <li className={theme == 'light' ? 'light-li' : 'dark-li'}>
                        <img id="image" src={dadosUser.imagemPerfil ? `https://chat-io-jpz0.onrender.com/images/${dadosUser.imagemPerfil}` : profileImg} alt="" />
                        {
                          windows > 1246 ?
                          (<p style={{ color: theme == 'light' ? 'black' : '' }}>Perfil</p>)
                          :
                          (<></>)
                        }
                      </li>
                    </Link>
                  )
                }
            </ul>
          </nav>
        </ContainerMenu>
      )
    }
    </>
  );
};

export default Menu;
