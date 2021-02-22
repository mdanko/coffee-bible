import {
  Stack,
  Heading,
  Image,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AddDialog from './AddDialog';
import { ColorModeSwitcher } from './ColorModeSwitcher';

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
      align="center"
      justify="space-between"
      padding={{ base: 2, md: 8 }}
      position={{ base: 'fixed', md: isScrolled ? 'fixed' : 'static' }}
      top="0"
      left="0"
      width="100%"
      boxShadow={{ base: boxShadow, md: isScrolled ? boxShadow : 'none' }}
      height={{ base: '60px', md: '100px' }}
      bg={bg}
      transition="0.5s"
    >
      <Stack direction="row">
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

      <Stack spacing={4} direction="row" justifySelf="flex-end">
        <AddDialog />
        <ColorModeSwitcher />
      </Stack>
    </Flex>
  );
};

export default AppBar;
