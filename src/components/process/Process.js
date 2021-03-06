import Icon from '@chakra-ui/icon';
import { Tooltip } from '@chakra-ui/tooltip';
import { PROCESS } from '../../constants';

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

export default Process;
