import { useState } from "react";
import { Container } from "./styles";
import { loginServer } from "../../crud";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ok, setOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email && senha) {
      const response = await loginServer(email, senha);
      setOk(true);

      if (response.ok) {
        console.log(response);
        navigate('/home');
      } else {
        setOk(false);
        console.error(response);
      }
    }
  };

  return (
    <Container>
      {
        ok && (<Loading/>)
      }
      <div className="chatio">
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
        <h1>Chat.io</h1>
      </div>
      <div className="container-form">
        <form onSubmit={handleSubmit}>
          <h1>Chat.io</h1>
          <p id="text">Bem vindo de volta!</p>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email..."
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            id="senha"
            placeholder="Senha..."
            required
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Confirmar</button>
          <p>Não tem uma conta? <a href="https://chat-io-jpz0.onrender.com/">Registe-se</a></p>
        </form>
      </div>
    </Container>
  );
};

export default Login;