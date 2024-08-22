import styled from "styled-components";
import Themes from "../../Themes";

export const ContainerMenu = styled.div`
  width: 200px;
  height: 100dvh;
  padding: 15px;
  background-color: ${(props) => props.theme == 'light' ? 'white' : `${Themes.colors.dark_gray}`};
  border-right: 1px solid ${(props) => props.theme == 'light' ? `${Themes.colors.light_white2}` : `${Themes.colors.light_gray}`};

  .image-perfil img {
    width: 54px;
    height: 54px;
    object-fit: cover;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }

  .image-perfil span {
    background-color: ${Themes.colors.light_gray};
    width: 42px;
    height: 42px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    zoom: 130%;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
      transition: 0.1s;
    }
  }

  .logo {
    justify-content: center;
    align-items: center;
    display: flex;

    &:hover {
      cursor: pointer;
    }
  }
  .logo h1 {
    background: linear-gradient(90deg, #3677FF, #FF6270, #af002d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  nav {
    margin-top: 14px;
  }
  nav {padding: 10px 0px;}
  nav ul .light-li, .dark-li {
    background-color: ${Themes.colors.light_gray};

    display: flex;
    align-items: center;
    padding: 10px;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
      transition: 0.1s;
    }
  }
  nav ul .light-li {
    background-color: ${Themes.colors.light_white2};
    &:hover {
      background-color: ${Themes.colors.light_white};
    }
  }
  nav ul .dark-li {
    background-color: ${Themes.colors.light_gray};
    &:hover {
      background-color: ${Themes.colors.ultra_dark};
    }
  }
  nav ul li a, p {font-size: 0.85em;}
  nav ul li img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 10px;
  }
  nav ul li span {
    zoom: 180%;
    margin-right: 10px;
    color: white;
  }
  nav ul li p {
    color: white;
  }
  nav ul li {list-style: none;}
  nav ul li a {
    color: white;
    text-decoration: none;
  }
  nav ul .light-link, .dark-link {
    text-decoration: none;
  }

  @media screen and (max-width: 1246px) {
    width: 77px;
    padding: 12px;

    .logo {
      font-size: 1.2em;
      word-wrap: break-word;
      border-radius: 50%;
      height: 54px;
      width: 54px;
      margin-bottom: 10px;
    }
    nav ul .dark-li, .light-li {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      margin-top: -5px;
      justify-content: center;
      align-items: center;
      display: flex;
    }
    nav ul li span {
      margin: 0;
      zoom: 130%;
    }
  }
  @media screen and (min-width: 1246px) {
    .logo {
      justify-content: start;
      align-items: start;
    }

    nav ul .dark-li, .light-li {
      border-radius: 5px;
      margin-top: -5px;
    }
  }
`;