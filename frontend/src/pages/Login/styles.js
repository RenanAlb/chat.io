import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: ${Themes.colors.dark_gray};
  width: 100%;
  height: 100dvh;
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;

  .chatio {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    animation: moove 12s infinite ease-in-out;
    border-radius: 150px;
    padding: 20px;
  }
  .chatio h1 {
    font-size: 15em;
    color: ${Themes.colors.light_gray};
    transition: 0.2s;
  }

  @keyframes moove {
    0% {
      top: -100%;
    }
    50% {
      top: 0px;
    }
    100% {
      top: -100%;
    }
  }

  .container-form {
    position: absolute;
    left: 200px;
    top: 50%;
    transform: translate(0,-50%);
  }
  .container-form form {
    display: flex;
    flex-direction: column;
    width: 360px;
  }
  .container-form form h1 {
    color: white;
    font-size: 3.5em;
  }
  .container-form form #text {
    color: ${Themes.colors.light_white};
    font-weight: 600;
    font-size: 1.4em;
    margin: 15px 0px 20px 0px;
  }
  .container-form form input {
    background-color: ${Themes.colors.light_gray};
    width: 100%;
    height: 60px;
    border-radius: 5px;
    border: none;
    margin: 9px 0px;
    padding: 20px;
    color: white;
    font-size: 1.05em;
    outline: none;

    &::placeholder {
      font-size: 0.75em;
      font-weight: 600;
    }
  }
  .container-form form button {
    background-color: ${Themes.colors.light_blue};
    width: 100%;
    height: 60px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 600;
    margin-top: 9px;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.dark_blue};
    }
  }
  .container-form form p {
    color: white;
    margin-top: 14px;
  }
  .container-form form p a {
    text-decoration: none;
    color: ${Themes.colors.light_blue};

    &:hover {
      cursor: pointer;
      color: ${Themes.colors.dark_blue};
    }
  }

  @media screen and (max-width: 1440px) {
    .chatio h1 {
      font-size: 10em;
      transition: 0.2s;
    }
  }
  @media screen and (max-width: 1200px) {
    .chatio h1 {
      font-size: 6em;
      transition: 0.2s;
    }
  }
  @media screen and (max-width: 1000px) {
    .chatio h1 {
      font-size: 3em;
      transition: 0.2s;
    }
  }
  @media screen and (max-width: 800px) {
    .chatio {
      display: none;
    }

    .container-form {
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }
  @media screen and (max-width: 400px) {
    .container-form {
      width: 100%;
      padding: 20px;
    }
    .container-form form {
      width: 100%;
    }
  }
`;