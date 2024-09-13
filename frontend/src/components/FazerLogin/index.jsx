import { Container } from "./styles";
import { useTheme } from '../../context/ThemeContext';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const FazerLogin = ({ onOkImg }) => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return(
    <Container theme={theme}>
      <div className="blur-fl"></div>
      <div className="card-fl">
        <h2>Faça login novamente para salvar as alterações</h2>
        <p>Faça login para que a imagem de perfil seja carregada corretamente.</p>
        <div>
          <button onClick={() => navigate('/login')}>Fazer login</button>
          <button onClick={() => onOkImg(false)}>Depois</button>
        </div>
      </div>
    </Container>
  );
};

FazerLogin.propTypes = {
  onOkImg: PropTypes.func
};

export default FazerLogin;