import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';

const Rating = ({ value }) => {
  return (
    <Box d="flex" mt={2} mb={2} alignItems="center" alignSelf="flex-end">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <StarIcon
            key={i}
            boxSize={6}
            color={i < value ? 'orange.200' : 'gray.300'}
          />
        ))}
    </Box>
  );
};

export default Rating;
