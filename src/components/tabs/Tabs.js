import { HStack, useRadioGroup } from '@chakra-ui/react';
import TabButton from './TabButton';
import { useTabs } from '../../context/TabsContext';

const Tabs = () => {
  const { setSelectedTab } = useTabs();
  const options = [
    { key: 'all', value: 'All' },
    { key: 'top', value: '⭐ Top 10' },
    { key: 'unusual', value: '🤩 Unusual Flavors' },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'tabs',
    defaultValue: 'all',
    onChange: setSelectedTab,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {options.map(option => {
        const radio = getRadioProps({ value: option.key });
        return (
          <TabButton key={option.key} {...radio}>
            {option.value}
          </TabButton>
        );
      })}
    </HStack>
  );
};

export default Tabs;
