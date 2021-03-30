import { Image as ChakraImage } from '@chakra-ui/image';
import PropTypes from 'prop-types';

const Image = ({ src, h, w }) => {
  return (
    <ChakraImage
      d="inline-block"
      rounded="0.5rem"
      src={src}
      alt="Coffee image"
      bg="white"
      h={h || '300px'}
      w={w || '300px'}
      objectFit="cover"
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  h: PropTypes.string,
  w: PropTypes.string,
};

export default Image;
