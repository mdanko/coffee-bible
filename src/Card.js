import {
  Box,
  Text,
  Image,
  useBreakpointValue,
  Heading,
  Tag,
  TagLabel,
  HStack,
  Icon,
} from '@chakra-ui/react';

const Card = ({ image, title, subtitle, icon, tags }) => {
  const justifySelfCard = useBreakpointValue({
    base: 'start',
    sm: 'center',
  });

  return (
    <Box
      p="10px"
      m="10px"
      maxW="350px"
      borderWidth="1px"
      rounded="10px"
      borderColor="gray.300"
      boxShadow="md"
      bg="cyan.300"
      color="#2d383c"
      fontSize="2rem"
      textAlign="center"
      fontFamily="Consolas"
      justifySelf={justifySelfCard}
    >
      <Image
        rounded="0.5rem"
        src={image}
        alt={`${title} ${subtitle}`}
        bg="white"
      />
      <Heading>{title}</Heading>
      <Text fontSize="2xl">{subtitle}</Text>
      <Icon as={icon} />
      <HStack m="10px" spacing="10px">
        {tags.map(tag => (
          <Tag
            size="md"
            key={tag}
            borderRadius="full"
            variant="subtle"
            colorScheme="cyan"
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default Card;
