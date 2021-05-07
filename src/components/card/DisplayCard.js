import { EditIcon } from '@chakra-ui/icons';
import { Text, Heading, Flex, IconButton } from '@chakra-ui/react';
import FlavourNotes from '../flavourNotes/FlavourNotes';
import Rating from '../rating/Rating';
import Process from '../process/Process';
import Image from '../image/Image';
import UnusualFlavour from '../unusualFlavour/UnusualFlavour';
import PropTypes from 'prop-types';

const DisplayCard = ({ data, onEdit }) => {
  return (
    <Flex
      p="10px"
      m="10px"
      maxW="350px"
      maxH="550px"
      borderWidth="1px"
      rounded="md"
      boxShadow="md"
      fontSize="2rem"
      textAlign="center"
      fontFamily="Consolas"
      justifySelf="center"
      flexDirection="column"
      position="relative"
    >
      <Flex justifyContent="space-between">
        <IconButton
          aria-label="Edit"
          size="lg"
          variant="ghost"
          colorScheme="orange"
          icon={<EditIcon />}
          onClick={onEdit}
        />

        <Rating value={data.rating} />
      </Flex>
      <>{data.isUnusual && <UnusualFlavour />}</>
      <Image src={data.image} />
      <Heading>{data.roastery}</Heading>
      <Text fontSize="xl">{`${data.country} ${data.farm}`}</Text>
      <Process value={data.process} />
      <FlavourNotes tags={data.flavourNotes} />
    </Flex>
  );
};

DisplayCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  rating: PropTypes.number.isRequired,
  isUnusual: PropTypes.bool.isRequired,
};

export default DisplayCard;
