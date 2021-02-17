import { ChakraProvider, Grid, SimpleGrid, theme } from '@chakra-ui/react';
import Card from './Card';
import { COFFEE } from './data';
import { PROCESS } from './constants';
import AppBar from './AppBar';
import Fonts from './Fonts';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppBar />
      <Grid p={3}>
        <SimpleGrid
          minChildWidth={{ base: '300px', md: '400px' }}
          spacing="80px"
        >
          {COFFEE.map(item => (
            <Card
              key={item.id}
              image={item.image}
              title={item.roastery}
              subtitle={`${item.country} ${item.farm}`}
              icon={PROCESS[item.process]}
              tags={item.notes}
            />
          ))}
        </SimpleGrid>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
