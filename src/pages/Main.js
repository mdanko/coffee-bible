import { Grid, SimpleGrid } from '@chakra-ui/react';
import { useEffect } from 'react';
import Card from '../components/card/Card';
import { useCoffee } from '../context/CoffeeContext';
import { useTabs } from '../context/TabsContext';

const Main = () => {
  const { coffeeData, setCoffeeData } = useCoffee();
  const { selectedTab } = useTabs();
  const filterCoffee = (data, key) => {
    switch (key) {
      case 'all':
        return data.slice().sort((a, b) => b._id.localeCompare(a._id));
      case 'top':
        return data
          .slice()
          .sort((a, b) => b.rating - a.rating)
          .slice(0, 10);
      case 'unusual':
        return data.filter(coffee => coffee.isUnusual);
      default:
        return data;
    }
  };
  const displayedCoffeeData = filterCoffee(coffeeData, selectedTab);

  useEffect(() => {
    fetch('https://coffee-bible.herokuapp.com/api/coffee')
      .then(res => res.json())
      .then(setCoffeeData);
  }, []);

  return (
    <Grid p={3} mt={{ base: 28, sm: 16, md: 0 }}>
      <SimpleGrid minChildWidth={{ base: '300px', md: '400px' }} spacing="80px">
        {displayedCoffeeData.map(item => (
          <Card key={item._id} data={item} />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default Main;
