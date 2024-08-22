import styled from 'styled-components';
import Themes from '../../Themes';

export const ContainerChat = styled.div`
  position: relative;
  background-color: ${(props) => props.theme == 'light' ? 'white' : `${Themes.colors.dark_gray}`};
  width: 65%;
  height: 100dvh;
  padding: 15px;
  justify-content: center;
  align-items: center;
  display: flex;

  .data-cabecalho {
    text-align: center;
  }
  .data-cabecalho > span {
    color: ${(props) => props.theme == 'light' ? Themes.colors.light_gray : Themes.colors.light_white2};
    font-size: 0.8em;
  }

  > p {
    color: white;
    font-size: 2em;
    font-weight: 600;
  }

  .header-fixed-chat {
    backdrop-filter: blur(45px);
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 17px);
    padding: 15px;
    z-index: 1;
  }
  #light-hfc {
    background: linear-gradient(to bottom, white, #ffffff28);
  }
  #dark-hfc {
    background: linear-gradient(to bottom, ${Themes.colors.dark_gray}, #111111a8);
  }
  .header-fixed-chat .perfil {
    display: flex;
    align-items: center;
  }
  .header-fixed-chat .perfil img {
    background-color: ${Themes.colors.light_white};
    width: 60px;
    height: 60px;
    object-fit: cover;
    margin-right: 15px;
    border-radius: 50%;
  }
  .header-fixed-chat .perfil p {
    color: white;
    font-weight: 600;
  }
  .header-fixed-chat .perfil span {
    margin-right: 10px;
    color: ${Themes.colors.light_white};
    transform: 0.1s;

    &:hover {
      cursor: pointer;
      color: white;
      transform: 0.1s;
    }
  }
  .header-fixed-chat span {
    color: white;
    zoom: 120%;
    padding: 5px;

    &:hover {cursor: pointer;}
  }
  .header-fixed-chat {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .container-chat {
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% - 15px);
    height: calc(100% - 80px);
    overflow-y: scroll;
    padding: 100px 10px 15px 0px;
  }
  .container-chat .me {
    justify-content: end;
    align-items: end;
    display: flex;
    margin: 35px 0px;
  }
  .container-chat .you {
    justify-content: start;
    align-items: start;
    display: flex;
    margin: 35px 0px;
  }
  .container-chat div .chat-message {
    padding: 15px 15px 15px 15px;
    max-width: 390px;
    line-height: 25px;
    text-align: start;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    position: relative;
    animation: chat 0.4s ease-in-out;
    transition: 0.1s;
  }

  @keyframes chat {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  .container-chat #me strong {
    color: #d9d9d9;
    font-size: 0.72em;
    margin-top: 10px;
    position: absolute;
    top: -32px;
    right: 0;
  }
  .container-chat #you strong {
    color: #d9d9d9;
    font-size: 0.72em;
    margin-top: 10px;
    position: absolute;
    top: -32px;
    left: 0;
  }
  .container-chat #you {
    background-color: ${Themes.colors.light_white2};
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 0.9em;
  }
  .container-chat #me {
    background-color: ${Themes.colors.light_blue};
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .container-chat #me p {
    color: white;
    font-size: 0.9em;
  }
  .container-chat #you p {
    font-size: 0.9em;
  }
  .container-chat img {width: 500px;}

  .send-message {
    width: calc(100% - 30px);
    position: absolute;
    bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .send-message input {
    padding: 10px 20px;
    background-color: ${Themes.colors.light_gray};
    width: 91%;
    height: 50px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: white;
    font-size: 1.05em;

    &::placeholder {
      font-size: 0.85em;
      color: gray;
    }
  }
  .send-message button {
    background-color: ${Themes.colors.light_blue};
    border: none;
    width: 50px;
    height: 50px;
    border-radius: 5px;
    transition: 0.1s;

    &:hover {
      background-color: ${Themes.colors.dark_blue};
      cursor: pointer;
      transition: 0.1s;
    }
  }
  .send-message button span {
    color: white;
    zoom: 120%;
  }

  @media screen and (max-width: 1246px) {
    width: 66%;
    .logo {
      word-wrap: break-word;
      width: 75px;
    }
  }
  @media screen and (max-width: 700px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1;
  }
`;