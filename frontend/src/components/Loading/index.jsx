import { Container } from "./styles";
import { useTheme } from '../../context/ThemeContext';

const Loading = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container style={{ backgroundColor: theme == 'light' ? 'white' : '' }}>
      <l-tail-chase
        size="45"
        speed="1.75"
        color={ theme == 'light' ? 'black' : 'white'}
      ></l-tail-chase>
    </Container>
  );
};

export default Loading;