import { useState } from 'react';

const Editable = ({ isEditing, defaultValue, ...props }) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = event => setValue(event.target.value);
  const children = props.children({ value, onChange, setValue });
  const editableChild = children.props.children[0];
  const displayChild = children.props.children[1];

  return <>{isEditing ? editableChild : displayChild}</>;
};

export default Editable;
