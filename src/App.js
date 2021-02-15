import {
  ChakraProvider,
  Grid,
  SimpleGrid,
  IconButton,
  theme,
  Stack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Card from './Card';
import { COFFEE } from './data';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <Stack spacing="10px" direction="row" justifySelf="flex-end">
          <IconButton
            aria-label="Add coffee"
            icon={<AddIcon />}
            variant="outline"
            colorScheme="cyan"
          />
          <ColorModeSwitcher />
        </Stack>
        <SimpleGrid minChildWidth="400px" spacing="80px">
          {COFFEE.map(item => (
            <Card
              key={item.id}
              image={item.image}
              title={item.roastery}
              subtitle={`${item.country} ${item.farm}`}
              description={item.notes.join(', ')}
            />
          ))}
        </SimpleGrid>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
