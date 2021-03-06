import { Select } from '@chakra-ui/select';

const EditableProcess = props => {
  return (
    <Select {...props} placeholder="Select process type" id="process">
      <option value="WASHED" label="Washed" />
      <option value="NATURAL" label="Natural" />
      <option value="HONEY" label="Honey" />
    </Select>
  );
};

export default EditableProcess;
