import { useState } from 'react';
import PropTypes from 'prop-types';

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

Editable.propTypes = {
  isEditing: PropTypes.bool.isRequired,
  defaultValue: PropTypes.any,
  editableChildren: PropTypes.func.isRequired,
  displayChildren: PropTypes.func.isRequired,
};

export default Editable;
