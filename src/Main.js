import { Grid, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import { useCoffee } from './context/CoffeeContext';
import { useTabs } from './context/TabsContext';

const Main = () => {
  const { coffeeData } = useCoffee();
  const { selectedTab } = useTabs();
  const filterCoffee = (data, key) =>
    key === 'unusual' ? data.filter(coffee => coffee.isUnusual) : data;
  const displayedCoffeeData = filterCoffee(coffeeData, selectedTab);

  return (
    <Grid p={3} mt={{ base: 16, md: 0 }}>
      <SimpleGrid minChildWidth={{ base: '300px', md: '400px' }} spacing="80px">
        {displayedCoffeeData.map(item => (
          <Card
            key={item.id}
            image={item.image}
            title={item.roastery}
            subtitle={`${item.country} ${item.farm}`}
            process={item.process}
            tags={item.flavourNotes}
            rating={item.rating}
            isUnusual={item.isUnusual}
          />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default Main;
