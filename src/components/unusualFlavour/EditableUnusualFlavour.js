import { Checkbox } from '@chakra-ui/checkbox';
import PropTypes from 'prop-types';

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

EditableUnusualFlavour.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default EditableUnusualFlavour;
