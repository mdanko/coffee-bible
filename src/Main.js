import { Grid, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import { PROCESS } from './constants';
import { useCoffee } from './context/CoffeeContext';

const Main = () => {
  const { coffeeData } = useCoffee();

  return (
    <Grid p={3} mt={{ base: 16, md: 0 }}>
      <SimpleGrid minChildWidth={{ base: '300px', md: '400px' }} spacing="80px">
        {coffeeData.map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.roastery}
            subtitle={`${item.country} ${item.farm}`}
            process={item.process}
            tags={item.flavourNotes}
            rating={item.rating}
          />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default Main;
