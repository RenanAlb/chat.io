import styled from "styled-components";
import Themes from "../../Themes";

export const ContainerConversas = styled.div`
  width: 25%;
  height: 100dvh;
  padding: 15px;
  background-color: ${(props) => props.theme == 'light' ? `white` : `${Themes.colors.dark_gray}`};
  border-right: 1px solid ${(props) => props.theme == 'light' ? `${Themes.colors.light_white2}` : `${Themes.colors.light_gray}`};

  > h1 {
    color: white;
    margin-bottom: 22px;
    margin-top: 8px;
    font-size: 1.5em;
  }

  .light-input, .dark-input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: none;
    outline: none;
    padding: 10px 20px;
    font-size: 1.05em;

    &::placeholder {
      color: gray;
    }
  }
  .light-input {
    background-color: ${Themes.colors.light_white2};
    color: black;
  }
  .dark-input {
    background-color: ${Themes.colors.light_gray};
    color: white;
  }

  .conversas {
    height: calc(100dvh - 156px);
    margin-top: 20px;
    overflow-y: scroll;
  }
  .conversas .light-p {
    color: black;
    margin: 5px 0px;
    font-size: 0.9em;
  }
  .conversas .dark-p {
    color: white;
    margin: 5px 0px;
    font-size: 0.9em;
  }
  .conversas::-webkit-scrollbar {
    display: none;
  }
  .conversas .conversa {
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 10px 0px;
    border-radius: 10px;
    border: 2px solid transparent;
    transition: 0.1s;

    &:hover {
      cursor: pointer;
      border: 2px solid ${Themes.colors.light_blue};
      transition: 0.1s;
    }
  }
  .conversas #light-conversas {
    background-color: ${Themes.colors.light_white2};
  }
  .conversas #dark-conversas {
    background-color: ${Themes.colors.light_gray};
  }
  .conversas .conversa img {
    background-color: white;
    border-radius: 50%;
    object-fit: cover;
    width: 50px;
    height: 50px;
    margin-right: 20px;
  }
  .conversas .conversa h4 {
    color: white;
    margin-bottom: 5px;
  }
  .conversas .conversa p {
    color: white;
    font-size: 0.85em;
  }

  @media screen and (max-width: 1246px) {
    width: 350px;
  }
  @media screen and (max-width: 700px) {
    width: 89%;
  }
`;