import { Input } from '@chakra-ui/input';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

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

UploadImageInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default UploadImageInput;
