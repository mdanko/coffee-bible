import { ChakraProvider, Grid, SimpleGrid, theme } from '@chakra-ui/react';
import Card from './Card';
import { COFFEE } from './data';
import { PROCESS } from './constants';
import AppBar from './AppBar';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppBar />
      <Grid minH="100vh" p={3}>
        <SimpleGrid minChildWidth="400px" spacing="80px">
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
