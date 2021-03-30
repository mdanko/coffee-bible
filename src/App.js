import { ChakraProvider, theme } from '@chakra-ui/react';
import AppBar from './components/appbar/AppBar';
import Fonts from './components/fonts/Fonts';
import Main from './pages/Main';
import { CoffeeContextProvider } from './context/CoffeeContext';
import { TabsContextProvider } from './context/TabsContext';

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <CoffeeContextProvider>
        <TabsContextProvider>
          <Fonts />
          <AppBar />
          <Main />
        </TabsContextProvider>
      </CoffeeContextProvider>
    </ChakraProvider>
  );
};

export default App;
