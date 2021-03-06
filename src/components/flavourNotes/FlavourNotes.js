import { HStack } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/tag';

const FlavourNotes = ({ tags }) => {
  return (
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
  );
};

export default FlavourNotes;
