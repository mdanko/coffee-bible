import { Input } from '@chakra-ui/input';

const UploadImage = ({ onChange }) => {
  return (
    <Input
      type="file"
      accept="image/*"
      capture="environment"
      onChange={onChange}
      p="5px"
    />
  );
};

export default UploadImage;
