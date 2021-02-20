import { Grid, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import { PROCESS } from './constants';
import { useCoffee } from './context/CoffeeContext';

const Main = () => {
  const { coffeeData } = useCoffee();

  return (
    <Grid p={3}>
      <SimpleGrid minChildWidth={{ base: '300px', md: '400px' }} spacing="80px">
        {coffeeData.map(item => (
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
  );
};

export default Main;
