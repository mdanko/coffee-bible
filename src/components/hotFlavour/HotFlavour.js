import { Tag, TagLabel } from '@chakra-ui/tag';

const HotFlavour = () => {
  return (
    <Tag
      bgColor="purple.300"
      textColor="white"
      size="md"
      fontSize="14px"
      position="absolute"
      borderRadius="md"
      m="2px"
      top="65px"
      right="20px"
    >
      <TagLabel fontWeight="600">🤩 Unusual Flavor</TagLabel>
    </Tag>
  );
};

export default HotFlavour;
