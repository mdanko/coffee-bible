import { Box, useColorModeValue, useRadio } from '@chakra-ui/react';

const TabButton = props => {
  const bg = useColorModeValue('orange.500', 'orange.300');
  const color = useColorModeValue('white', 'black');
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        _checked={{
          bg: bg,
          color: color,
          borderColor: bg,
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        px={{ base: 1, sm: 2 }}
        py={{ base: 1, sm: 2 }}
        fontSize={{ base: 'xs', sm: 'sm', md: 'md' }}
      >
        {props.children}
      </Box>
    </Box>
  );
};

export default TabButton;
