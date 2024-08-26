import { useState } from "react";
import { Container } from "./styles";
import { cadastroServer } from "../../crud";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";

const Cadastro = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [ok, setOk] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nome && email && senha) {
      const response = await cadastroServer(nome, email, senha);

      if (response) {
        console.log(response);
        setOk(false);
        navigate('/home');
      } else {
        setOk(false);
        alert('Erro ao se cadastrar! Tente novamente');
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
          <p id="text">Converse com os seus amigos de uma forma fácil!</p>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="Nome..."
            required
            onChange={(e) => setNome(e.target.value)}
          />
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
          <button type="submit" onClick={() => setOk(true)}>Confirmar</button>
          <p>Já tem uma conta? <a href="https://chat-io-jpz0.onrender.com/login">Clique aqui</a></p>
        </form>
      </div>
    </Container>
  );
};

export default Cadastro;