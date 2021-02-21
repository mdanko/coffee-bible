import { Stack, Heading, Image, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import AddDialog from './AddDialog';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const AppBar = () => {
  const handleScroll = () => setIsScrolled(window.pageYOffset > 100);
  const [isScrolled, setIsScrolled] = useState(false);

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
      position={isScrolled && 'fixed'}
      top="0"
      left="0"
      width="100%"
      boxShadow={isScrolled && 'md'}
      backgroundColor={isScrolled && 'orange.50'}
      transition="0.7s"
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
