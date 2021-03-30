import Icon from '@chakra-ui/icon';
import { Tooltip } from '@chakra-ui/tooltip';
import { PROCESS } from '../../constants';
import PropTypes from 'prop-types';

const Process = ({ value }) => {
  const process = PROCESS[value];

  return (
    <Tooltip label={process.text}>
      <span>
        <Icon as={process.icon} />
      </span>
    </Tooltip>
  );
};

Process.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Process;
