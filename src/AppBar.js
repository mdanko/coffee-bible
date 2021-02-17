import { AddIcon } from '@chakra-ui/icons';
import { IconButton, Stack, Heading, Image, Flex } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const AppBar = () => {
  return (
    <Flex as="nav" align="center" justify="space-between" padding={8}>
      <Flex align="center" mr={5}>
        <Stack direction="row">
          <Image
            filter="hue-rotate(15deg)"
            h="50px"
            borderRadius="full"
            src="https://cdn.dribbble.com/users/1274247/screenshots/6149307/artboard_1_copy-1.jpg"
            alt="Coffee Bible logo"
          />
          <Heading fontFamily="ONEDAY" display={{ sm: 'none', md: 'block' }}>
            Coffee Bible
          </Heading>
        </Stack>
      </Flex>

      <Stack spacing={4} direction="row" justifySelf="flex-end">
        <IconButton
          aria-label="Add coffee"
          icon={<AddIcon />}
          variant="outline"
          colorScheme="orange"
        />
        <ColorModeSwitcher />
      </Stack>
    </Flex>
  );
};

export default AppBar;
