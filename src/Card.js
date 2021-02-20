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
  Tooltip,
} from '@chakra-ui/react';

const Card = ({ image, title, subtitle, iconTooltip, icon, tags }) => {
  const justifySelfCard = useBreakpointValue({
    base: 'start',
    sm: 'center',
  });

  return (
    <Box
      p="10px"
      m="10px"
      maxW="350px"
      maxH="520px"
      borderWidth="1px"
      rounded="md"
      boxShadow="md"
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
