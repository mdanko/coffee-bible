import { Input } from '@chakra-ui/input';
import { forwardRef } from 'react';

const UploadImageInput = forwardRef(({ onChange, ...props }, ref) => {
  return (
    <Input
      type="file"
      accept="image/*;capture=camera"
      onChange={onChange}
      p="5px"
      ref={ref}
      {...props}
    />
  );
});

export default UploadImageInput;
