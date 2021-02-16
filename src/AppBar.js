import { AddIcon } from '@chakra-ui/icons';
import { Box, IconButton, Stack, Heading, Image } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const AppBar = () => {
  return (
    <Box h="60px" justifyContent="center" d="flex" p={4}>
      <Stack direction="row" marginLeft="auto">
        <Image
          filter="hue-rotate(180deg)"
          h="50px"
          borderRadius="full"
          src="https://cdn.dribbble.com/users/1274247/screenshots/6149307/artboard_1_copy-1.jpg"
          alt="Coffee Bible logo"
        />
        <Heading>My Coffee Bible</Heading>
      </Stack>

      <Stack spacing={4} direction="row" marginLeft="auto">
        <IconButton
          aria-label="Add coffee"
          icon={<AddIcon />}
          variant="outline"
          colorScheme="cyan"
        />
        <ColorModeSwitcher />
      </Stack>
    </Box>
  );
};

export default AppBar;
