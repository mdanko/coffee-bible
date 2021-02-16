import { AddIcon } from '@chakra-ui/icons';
import { Box, IconButton, Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

const AppBar = () => {
  return (
    <Box h="60px" justifyContent="center" d="flex" p={4}>
      <Stack direction="row" marginLeft="auto">
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
