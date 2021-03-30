import { useColorModeValue } from '@chakra-ui/color-mode';
import Icon from '@chakra-ui/icon';
import { Box } from '@chakra-ui/layout';
import { useEffect, useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import Image from './Image';
import UploadImage from './UploadImage';
import PropTypes from 'prop-types';

const EditableImage = ({ value, onChange }) => {
  const [src, setSrc] = useState(value);
  const bg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    onChange && onChange(src);
  }, [src]);

  return (
    <Box position="relative">
      <UploadImage
        onChange={e =>
          e.target.files.length > 0 &&
          setSrc(URL.createObjectURL(e.target.files[0]))
        }
      >
        <Icon
          as={MdPhotoCamera}
          focusable
          width="35px"
          height="35px"
          position="absolute"
          borderRadius="md"
          m="2px"
          bottom="5px"
          right="60px"
          bg={bg}
          _hover={{
            cursor: 'pointer',
          }}
        />
      </UploadImage>
      <Image src={src} h="150px" w="150px" />
    </Box>
  );
};

EditableImage.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default EditableImage;
