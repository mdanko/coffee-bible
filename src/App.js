import { ChakraProvider, theme } from '@chakra-ui/react';
import AppBar from './AppBar';
import Fonts from './Fonts';
import Main from './Main';
import { CoffeeContextProvider } from './context/CoffeeContext';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CoffeeContextProvider>
        <Fonts />
        <AppBar />
        <Main />
      </CoffeeContextProvider>
    </ChakraProvider>
  );
};

export default App;
