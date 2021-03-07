import { useEffect, useState } from 'react';
import Image from './Image';
import UploadImage from './UploadImage';

const EditableImage = ({ value, onChange }) => {
  const [src, setSrc] = useState(value);

  useEffect(() => {
    onChange && onChange(src);
  }, [src]);

  return (
    <>
      <UploadImage
        onChange={e =>
          e.target.files.length > 0 &&
          setSrc(URL.createObjectURL(e.target.files[0]))
        }
      />
      <Image src={src} h="150px" w="150px" />
    </>
  );
};

export default EditableImage;
