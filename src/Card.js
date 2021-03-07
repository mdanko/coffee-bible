import { useState } from 'react';
import { EditIcon } from '@chakra-ui/icons';
import { Box, Text, Heading, Flex, IconButton, Input } from '@chakra-ui/react';
import Editable from './Editable';
import FlavourNotes from './components/flavourNotes/FlavourNotes';
import EditableFlavourNotes from './components/flavourNotes/EditableFlavourNotes';
import Rating from './components/rating/Rating';
import EditableRating from './components/rating/EditableRating';
import Process from './components/process/Process';
import EditableProcess from './components/process/EditableProcess';
import Image from './components/image/Image';
import EditableImage from './components/image/EditableImage';

const Card = ({ image, title, subtitle, process, tags, rating }) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Box
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
        <Editable
          isEditing={isEditing}
          defaultValue={rating}
          editableChildren={props => (
            <EditableRating
              value={props.value}
              onChange={newValue => props.setValue(newValue)}
            />
          )}
          displayChildren={props => <Rating value={props.value} />}
        />
      </Flex>
      <Editable
        isEditing={isEditing}
        defaultValue={image}
        editableChildren={props => (
          <EditableImage
            value={props.value}
            onChange={newValue => props.setValue(newValue)}
          />
        )}
        displayChildren={props => <Image src={props.value} />}
      />
      <Editable
        isEditing={isEditing}
        defaultValue={title}
        editableChildren={props => <Input {...props} />}
        displayChildren={props => <Heading>{props.value}</Heading>}
      />
      <Editable
        isEditing={isEditing}
        defaultValue={subtitle}
        editableChildren={props => <Input {...props} />}
        displayChildren={props => <Text fontSize="2xl">{props.value}</Text>}
      />
      <Editable
        isEditing={isEditing}
        defaultValue={process}
        editableChildren={props => <EditableProcess {...props} />}
        displayChildren={props => <Process {...props} />}
      />
      <Editable
        isEditing={isEditing}
        defaultValue={tags}
        editableChildren={props => (
          <EditableFlavourNotes
            flavourNotes={props.value}
            onAdd={newValue => props.setValue(props.value.concat(newValue))}
            onRemove={removedValue =>
              props.setValue(props.value.filter(v => v !== removedValue))
            }
          />
        )}
        displayChildren={props => <FlavourNotes tags={props.value} />}
      />
    </Box>
  );
};

export default Card;
