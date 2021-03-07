import { Image as ChakraImage } from '@chakra-ui/image';

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

export default Image;
