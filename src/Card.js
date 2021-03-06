import { useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Image,
  Heading,
  Flex,
  IconButton,
  Input,
} from '@chakra-ui/react';
import Editable from './Editable';
import FlavourNotes from './components/flavourNotes/FlavourNotes';
import EditableFlavourNotes from './components/flavourNotes/EditableFlavourNotes';
import Rating from './components/rating/Rating';
import EditableRating from './components/rating/EditableRating';
import Process from './components/process/Process';
import EditableProcess from './components/process/EditableProcess';

const Card = ({ image, title, subtitle, process, tags, rating }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
      p="10px"
      m="10px"
      maxW="350px"
      maxH={isEditing ? '650px' : '550px'}
      borderWidth="1px"
      rounded="md"
      boxShadow="md"
      fontSize="2rem"
      textAlign="center"
      fontFamily="Consolas"
      justifySelf="center"
      d="flex"
      flexDirection="column"
    >
      <Flex justifyContent="space-between">
        <IconButton
          aria-label="Search database"
          size="lg"
          variant={isEditing ? 'solid' : 'ghost'}
          colorScheme="orange"
          icon={<EditIcon />}
          onClick={() => setIsEditing(!isEditing)}
        />
        <Editable isEditing={isEditing} defaultValue={rating}>
          {props => (
            <>
              <EditableRating
                value={props.value}
                onChange={newValue => props.setValue(newValue)}
              />
              <Rating value={props.value} />
            </>
          )}
        </Editable>
      </Flex>
      <Image
        d="inline-block"
        rounded="0.5rem"
        src={image}
        alt={`${title} ${subtitle} image`}
        bg="white"
        h="300px"
        w="300px"
        objectFit="cover"
      />
      <Editable isEditing={isEditing} defaultValue={title}>
        {props => (
          <>
            <Input {...props} />
            <Heading>{props.value}</Heading>
          </>
        )}
      </Editable>
      <Editable isEditing={isEditing} defaultValue={subtitle}>
        {props => (
          <>
            <Input {...props} />
            <Text fontSize="2xl">{props.value}</Text>
          </>
        )}
      </Editable>

      <Editable isEditing={isEditing} defaultValue={process}>
        {props => (
          <>
            <EditableProcess {...props} />
            <Process {...props} />
          </>
        )}
      </Editable>

      <Editable isEditing={isEditing} defaultValue={tags}>
        {props => (
          <>
            <EditableFlavourNotes
              flavourNotes={props.value}
              onAdd={newValue => props.setValue(props.value.concat(newValue))}
              onRemove={removedValue =>
                props.setValue(props.value.filter(v => v !== removedValue))
              }
            />
            <FlavourNotes tags={props.value} />
          </>
        )}
      </Editable>
    </Box>
  );
};

export default Card;
