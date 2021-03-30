import { useRef } from 'react';
import UploadImageInput from './UploadImageInput';
import PropTypes from 'prop-types';

const UploadImage = ({ onChange, ...props }) => {
  const fileInput = useRef(null);

  return (
    <>
      <label htmlFor="myInput">{props.children}</label>
      <UploadImageInput
        id="myInput"
        onChange={onChange}
        ref={fileInput}
        display="none"
      />
    </>
  );
};

UploadImage.propTypes = {
  onChange: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default UploadImage;
