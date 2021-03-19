import { useRef } from 'react';
import UploadImageInput from './UploadImageInput';

const UploadImage = ({ onChange, ...props }) => {
  const fileInput = useRef(null);
  debugger;
  return (
    <>
      <label htmlFor="myInput">{props.children()}</label>
      <UploadImageInput
        id="myInput"
        onChange={onChange}
        ref={fileInput}
        display="none"
      />
    </>
  );
};

export default UploadImage;
