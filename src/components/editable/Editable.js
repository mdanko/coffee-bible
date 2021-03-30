import { useState } from 'react';

const Editable = ({
  isEditing,
  defaultValue,
  editableChildren,
  displayChildren,
}) => {
  const [value, setValue] = useState(defaultValue);
  const onChange = event => setValue(event.target.value);

  return (
    <>
      {isEditing
        ? editableChildren({ value, onChange, setValue })
        : displayChildren({ value })}
    </>
  );
};

export default Editable;
