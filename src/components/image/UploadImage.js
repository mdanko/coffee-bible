import { Input } from '@chakra-ui/input';

const UploadImage = ({ onChange }) => {
  return <Input type="file" accept="image/*" onChange={onChange} p="5px" />;
};

export default UploadImage;
