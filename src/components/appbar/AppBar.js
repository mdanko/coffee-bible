import {
  Stack,
  Heading,
  Image,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AddDialog from '../add/AddDialog';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import PhoneTabs from '../tabs/PhoneTabs';
import Tabs from '../tabs/Tabs';

const AppBar = () => {
  const bg = useColorModeValue('white', 'rgb(26, 32, 44)');
  const boxShadow = useColorModeValue('md', 'dark-lg');
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => setIsScrolled(window.pageYOffset > 0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Flex
      as="nav"
      direction={{ base: 'column', sm: 'initial' }}
      padding={{ base: 2, md: 8 }}
      position={{ base: 'fixed', md: isScrolled ? 'fixed' : 'static' }}
      top="0"
      left="0"
      width="100%"
      boxShadow={{
        base: 'none',
        sm: boxShadow,
        md: isScrolled ? boxShadow : 'none',
      }}
      height={{ base: '108px', sm: '60px', md: '100px' }}
      bg={bg}
      transition="0.5s"
      zIndex="1"
    >
      <Flex width="100%" justify="space-between">
        <Stack direction="row" alignItems="center">
          <Image
            filter="hue-rotate(15deg)"
            h="50px"
            borderRadius="full"
            src="https://cdn.dribbble.com/users/1274247/screenshots/6149307/artboard_1_copy-1.jpg"
            alt="Coffee Bible logo"
          />
          <Heading fontFamily="ONEDAY" display={{ base: 'none', md: 'block' }}>
            Coffee Bible
          </Heading>
        </Stack>

        <Tabs display={{ base: 'none', sm: 'flex' }} />

        <Stack spacing={4} direction="row" justifySelf="flex-end">
          <AddDialog />
          <ColorModeSwitcher />
        </Stack>
      </Flex>
      <Flex align="center" display={{ base: 'initial', sm: 'none' }}>
        <PhoneTabs />
      </Flex>
    </Flex>
  );
};

export default AppBar;
