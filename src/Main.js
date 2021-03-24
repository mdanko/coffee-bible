import { Grid, SimpleGrid } from '@chakra-ui/react';
import Card from './Card';
import { useCoffee } from './context/CoffeeContext';
import { useTabs } from './context/TabsContext';

const Main = () => {
  const { coffeeData } = useCoffee();
  const { selectedTab } = useTabs();
  const filterCoffee = (data, key) => {
    switch (key) {
      case 'all':
        return data.sort((a, b) => a.id - b.id);
      case 'top':
        return data.sort((a, b) => b.rating - a.rating).slice(0, 10);
      case 'unusual':
        return data.filter(coffee => coffee.isUnusual);
      default:
        return data;
    }
  };
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
