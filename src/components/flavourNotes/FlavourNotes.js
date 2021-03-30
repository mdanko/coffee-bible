import { HStack } from '@chakra-ui/layout';
import { Tag, TagLabel } from '@chakra-ui/tag';
import PropTypes from 'prop-types';

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

FlavourNotes.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FlavourNotes;
