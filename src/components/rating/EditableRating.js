import { IconButton } from '@chakra-ui/button';
import { StarIcon } from '@chakra-ui/icons';
import { Box } from '@chakra-ui/layout';

const Rating = ({ value, onChange }) => {
  return (
    <Box d="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => (
          <IconButton
            key={i}
            variant="ghost"
            colorScheme="orange"
            aria-label={`${i} Star`}
            size="md"
            icon={<StarIcon />}
            color={i <= value ? 'orange.200' : 'gray.300'}
            onClick={() => onChange(i)}
          />
        ))}
    </Box>
  );
};

export default Rating;
