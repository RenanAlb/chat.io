import styled from "styled-components";
import Themes from "../../Themes";

export const Container = styled.div`
  background-color: ${Themes.colors.dark_gray};
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 2;
`;