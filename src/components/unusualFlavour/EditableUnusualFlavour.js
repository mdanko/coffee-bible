import { Checkbox } from '@chakra-ui/checkbox';

const EditableUnusualFlavour = ({ value, onChange }) => {
  return (
    <Checkbox
      isChecked={value}
      colorScheme="purple"
      onChange={e => onChange(e.target.checked)}
    >
      Unusual Flavor
    </Checkbox>
  );
};

export default EditableUnusualFlavour;
