import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { useTabs } from '../../context/TabsContext';

const PhoneTabs = props => {
  const { setSelectedTab } = useTabs();
  const options = [
    { key: 'all', value: 'All' },
    { key: 'top', value: '⭐ Top 10' },
    { key: 'unusual', value: '🤩 Unusual Flavors' },
  ];

  return (
    <Tabs
      onChange={index => setSelectedTab(options[index].key)}
      isFitted
      size="sm"
      colorScheme="orange"
      {...props}
    >
      <TabList>
        {options.map(option => {
          return <Tab>{option.value}</Tab>;
        })}
      </TabList>
    </Tabs>
  );
};

export default PhoneTabs;
