import { useEffect, useState } from 'react';
import { ChakraProvider, Grid, SimpleGrid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Card from './Card';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://finalspaceapi.com/api/v0/character')
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <SimpleGrid minChildWidth="410px" spacing="80px">
          {data.map(item => (
            <Card
              image={item.img_url}
              name={item.name}
              species={item.species}
              gender={item.gender}
              status={item.status}
            />
          ))}
        </SimpleGrid>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
