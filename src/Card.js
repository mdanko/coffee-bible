import { StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Image,
  Heading,
  Tag,
  TagLabel,
  HStack,
  Icon,
  Tooltip,
} from '@chakra-ui/react';

const Card = ({ image, title, subtitle, iconTooltip, icon, tags, rating }) => {
  return (
    <Box
      p="10px"
      m="10px"
      maxW="350px"
      maxH="550px"
      borderWidth="1px"
      rounded="md"
      boxShadow="md"
      fontSize="2rem"
      textAlign="center"
      fontFamily="Consolas"
      justifySelf="center"
      d="flex"
      flexDirection="column"
    >
      <Box d="flex" mt={2} mb={2} alignItems="center" float="right">
        {Array(5)
          .fill('')
          .map((_, i) => (
            <StarIcon
              key={i}
              boxSize={6}
              color={i < rating ? 'orange.200' : 'gray.300'}
            />
          ))}
      </Box>
      <Image
        d="inline-block"
        rounded="0.5rem"
        src={image}
        alt={`${title} ${subtitle} image`}
        bg="white"
        h="300px"
        w="300px"
        objectFit="cover"
      />
      <Heading>{title}</Heading>
      <Text fontSize="2xl">{subtitle}</Text>
      <Tooltip label={iconTooltip}>
        <span>
          <Icon as={icon} />
        </span>
      </Tooltip>
      <HStack m="10px" spacing="10px">
        {tags.map(tag => (
          <Tag
            size="md"
            key={tag}
            borderRadius="full"
            variant="subtle"
            colorScheme="orange"
          >
            <TagLabel>{tag}</TagLabel>
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default Card;
