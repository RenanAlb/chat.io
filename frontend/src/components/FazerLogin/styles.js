import styled from 'styled-components';
import Themes from '../../Themes';

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  z-index: 1;
  animation: opa 0.3s ease-in-out;

  .blur-fl {
    background-color: ${(props) => props.theme == 'light' ? '#f0ffff28' : '#111111a8'};
    backdrop-filter: blur(20px);
    width: 100%;
    height: 100dvh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    animation: bluur 0.1s ease-in-out;
  }

  @keyframes opa {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bluur {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .card-fl {
    position: absolute;
    z-index: 2;
    background-color: ${(props) => props.theme == 'light' ? 'white' : Themes.colors.light_gray};
    max-width: 400px;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0px 0px 70px ${(props) => props.theme == 'light' ? Themes.colors.light_white : Themes.colors.ultra_dark};
    margin: 0px 5px;
  }
  .card-fl h2, p {
    color: ${(props) => props.theme == 'light' ? 'black' : 'white'};
    margin-bottom: 20px;
  }
  .card-fl p {
    font-size: 0.85em;
    color: ${(props) => props.theme == 'light' ? 'black' : 'white'};
  }
  .card-fl div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .card-fl div button {
    width: 49%;
    border: none;
    background-color: ${Themes.colors.light_blue};
    padding: 14px 10px;
    border-radius: 5px;
    color: white;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.dark_blue};
      transition: 0.1s;
    }
  }
`;