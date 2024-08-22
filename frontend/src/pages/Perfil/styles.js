import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background: ${(props) => props.theme == 'light' ? 'white' : `${Themes.colors.dark_gray}`};
  position: relative;
  width: 100%;
  height: 100dvh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;

  #light-close, #dark-close {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 10px;
    zoom: 130%;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      transition: 0.1s;
    }
  }
  #dark-close {
    color: #d9d9d9;
    &:hover {
      cursor: pointer;
      color: white;
      transition: 0.1s;
    }
  }
  #light-close {
    color: gray;

    &:hover {
      cursor: pointer;
      color: ${Themes.colors.ultra_dark};
      transition: 0.1s;
    }
  }

  #light-edit, #dark-edit {
    position: absolute;
    right: 20px;
    zoom: 130%;
    bottom: 100px;
    padding: 10px;
    border-radius: 50%;
    transition: 0.2s;

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
      transition: 0.2s;
    }
  }
  #light-edit {
    color: black;
    background-color: ${Themes.colors.light_white2};

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
      transition: 0.2s;
    }
  }
  #dark-edit {
    color: white;
    background-color: ${Themes.colors.light_gray};

    &:hover {
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
      transition: 0.2s;
    }
  }

  .card-profile {
    position: relative;
    padding: 10px;
    border-radius: 10px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .card-profile .container-perfil {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .card-profile #person {
    background-color: ${Themes.colors.light_gray};
    width: 120px;
    height: 120px;
    justify-content: center;
    align-items: center;
    display: flex;
    border-radius: 50%;
    zoom: 190%;
    border: 2px solid white;
  }
  .card-profile img {
    background-color: white;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }
  .card-profile #light-img {
    border: 3px solid  ${Themes.colors.dark_gray};
  }
  .card-profile #dark-img {
    border: 3px solid white;
  }
  .card-profile input {
    background-color: red;
    position: absolute;
    right: 10px;
    width: 25px;
    zoom: 230%;
    border-radius: 50%;
    bottom: 58px;
    opacity: 0;

    &:hover {
      cursor: pointer;
    }
  }
  .card-profile .light {
    color: black;
    font-size: 1.5em;
    margin-top: 15px;
  }
  .card-profile .black {
    color: white;
    font-size: 1.5em;
    margin-top: 15px;
  }
  .card-profile strong {
    color: gray;
    font-weight: 400;
  }
  .card-profile .container-perfil .dark-button, .light-button {
    display: flex;
    align-items: center;
    padding: 12px;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    font-size: 0.9em;
    transition: 0.2s;
    &:hover {
      transition: 0.2s;
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
    }
  }
  .card-profile .container-perfil .dark-button {
    background-color: ${Themes.colors.light_gray};
    color: white;
    &:hover {
      transition: 0.2s;
      cursor: pointer;
      background-color: ${Themes.colors.ultra_dark};
    }
  }
  .card-profile .container-perfil .light-button {
    background-color: ${Themes.colors.light_white2};
    color: black;
    &:hover {
      transition: 0.2s;
      cursor: pointer;
      background-color: ${Themes.colors.light_white};
    }
  }

`;