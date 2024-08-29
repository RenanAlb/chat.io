import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: black;
  width: 100%;
  min-height: 100dvh;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;

  header {
    background-color: rgba(0, 0, 0, 0.588);
    backdrop-filter: blur(80px);
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
    width: 1000px;
    padding: 10px 15px;
    z-index: 1;
    border-radius: 40px;
  }

  .logo {
    justify-content: center;
    align-items: center;
    display: flex;
  }

  header .logo h1 {
    background: linear-gradient(90deg, #3677FF, #FF6270, #af002d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    font-size: 2.5em;

    &:hover {
      cursor: pointer;
    }
  }
  header button {
    background-color: rgba(255, 255, 255, 0.122);
    position: absolute;
    top: 13px;
    right: 13px;
    color: white;
    border: none;
    padding: 13px;
    border-radius: 20px;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      color: white;
      transition: 0.2s;
      background-color: rgba(0, 0, 0, 0.988);
    }
  }

  main {
    width: 1000px;
    margin: auto;
    padding: 0px 0px 0px 0px;
  }
  main .right-direction, .left-direction {
    position: relative;
    width: 100%;
    margin: 150px 0px;
  }
  main .right-direction {
    justify-content: start;
    align-items: start;
    display: flex;
  }
  main .left-direction {
    justify-content: end;
    align-items: end;
    display: flex;
  }
  main .center-direction {
    position: relative;
    width: 100%;
    margin: 150px 0px;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  main .center-direction .teste {
    width: 100%;
    padding: 50px;
    text-align: center;
    border-radius: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  main .center-direction .teste h1 {
    color: white;
    font-size: 3em;
    margin-bottom: 30px;
  }
  main .center-direction .teste button {
    border: none;
    background-color: #4775F3;
    padding: 20px;
    border-radius: 30px;
    font-weight: 600;
    font-size: 1.4em;
    color: white;
    transition: 0.3s;
    display: flex;
    align-items: center;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.light_gray};
      transition: 0.3s;
    }
  }
  main .center-direction .teste button span {
    margin-top: 3px;
    margin-left: 10px;
    font-weight: 600;
  }
  main .right-direction .apresentation {
    width: 100%;
    padding: 50px;
    border-top-right-radius: 90px;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
  }

  main .right-direction .apresentation h1 {
    color: white;
    font-size: 6.5em;
  }
  main .right-direction .apresentation div {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid ${Themes.colors.light_gray};
    width: 100px;
    height: 100px;
    border-radius: 50%;
    animation: borderColor 1.2s ease-in-out infinite;
  }
  @keyframes borderColor {
    0% {
      border: 1px solid ${Themes.colors.light_gray};
    }
    50% {
      border: 1px solid white;
    }
    100% {
      border: 1px solid ${Themes.colors.light_gray};
    }
  }
  main .right-direction .apresentation div p {
    color: white;
    margin: 10px 0px;
  }
  main .right-direction .apresentation div span {
    color: white;
  }
  main .left-direction .video {
    width: 80%;
    transform: translateX(400px);
    opacity: 0;
  }
  main .left-direction .video video {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-top-left-radius: 90px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
  }
  main .right-direction .text {
    width: 80%;
    background-color: #ED4B61;
    padding: 50px;
    border-top-right-radius: 90px;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
    transform: translate(-500px);
    opacity: 0;
  }
  main .right-direction .text h1 {
    color: white;
    font-size: 4.5em;
  }
  main .left-direction .share {
    width: 80%;
    background-color: #a26cb2;
    padding: 50px;
    border-top-left-radius: 90px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 90px;
    border-bottom-right-radius: 90px;
    transform: translate(500px);
    opacity: 0;
  }
  main .left-direction .share h1 {
    color: white;
    font-size: 4.5em;
  }

  @media screen and (max-width: 800px) {
    main .right-direction .apresentation h1 {
      color: white;
      font-size: 3.5em;
    }
    main .right-direction .text h1 {
      color: white;
      font-size: 3em;
    }
    main .left-direction .share h1 {
      color: white;
      font-size: 3em;
    }
    main .right-direction .apresentation {
      width: 100%;
      text-align: center;
    }
    main .right-direction .text {
      width: 100%;
    }
    main .left-direction .video {
      width: 100%;
    }
    main .left-direction .share {
      width: 100%;
    }
  }
  @media screen and (max-width: 1030px) {
    header {
      width: 100%;
      top: 0;
      border-radius: 0;
    }
    header .logo h1 {
      font-size: 2em;
    }
    header button {
      top: 9px;
    }
    main .right-direction .apresentation {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  @media screen and (max-width: 1040px) {
    main {
      width: 100%;
      padding: 30px 10px 10px 10px;
    }
  }

  @media screen and (max-width: 480px) {
    main .right-direction .apresentation h1 {
      color: white;
      font-size: 2.6em;
    }
    main .right-direction .text h1 {
      font-size: 2.1em;
    }
    main .left-direction .share h1 {
      font-size: 2.1em;
    }
    main .center-direction .teste h1 {
      font-size: 2.1em;
    }
  }
`;