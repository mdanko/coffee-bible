import { Box, Text, Image, useBreakpointValue } from '@chakra-ui/react';

const GENDER = Object.freeze({
  Male: '♂️',
  Female: '♀️',
  Other: '☿️',
});
const STATUS_BG_COLOR = Object.freeze({
  Alive: 'cyan.300',
  Deceased: 'black',
});

const Card = ({ image, name, species, gender, status }) => {
  const justifySelfCard = useBreakpointValue({
    base: 'start',
    sm: 'center',
  });
  const isAlive = status === 'Alive' || status === 'Operational';

  return (
    <Box
      p="10px"
      m="10px"
      maxW="350px"
      borderWidth="1px"
      rounded="10px"
      borderColor="gray.300"
      boxShadow="md"
      bg={isAlive ? STATUS_BG_COLOR.Alive : STATUS_BG_COLOR.Deceased}
      color={isAlive ? '#2d383c' : 'grey'}
      fontSize="2rem"
      textAlign="center"
      fontFamily="Consolas"
      justifySelf={justifySelfCard}
    >
      <Image
        rounded="0.5rem"
        src={image}
        alt={name}
        filter={isAlive ? '' : 'grayscale(1)'}
      />
      <Text>{name}</Text>
      <Text fontSize="xl">
        {species} {GENDER[gender] || GENDER.Other}
      </Text>
    </Box>
  );
};

export default Card;
