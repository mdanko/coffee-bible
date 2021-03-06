import { IconButton } from '@chakra-ui/button';
import { AddIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Wrap, WrapItem } from '@chakra-ui/layout';
import { Tag, TagCloseButton, TagLabel } from '@chakra-ui/tag';
import { useState } from 'react';

const EditableFlavourNotes = ({ flavourNotes, onAdd, onRemove }) => {
  const [flavourNote, setFlavourNote] = useState('');
  const getIsAddNoteDisabled = flavourNotes =>
    flavourNote === '' || flavourNotes.includes(flavourNote);

  return (
    <>
      <InputGroup name="flavourNotes" id="flavourNotes">
        <Input
          value={flavourNote}
          onChange={e => setFlavourNote(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            aria-label="Add flavour note"
            icon={<AddIcon />}
            variant="ghost"
            colorScheme="orange"
            isDisabled={getIsAddNoteDisabled(flavourNotes)}
            onClick={() => {
              onAdd(flavourNote);
              setFlavourNote('');
            }}
          />
        </InputRightElement>
      </InputGroup>
      <Wrap mt={4} spacing={4}>
        {flavourNotes.map(tag => (
          <WrapItem>
            <Tag
              size="lg"
              key={tag}
              borderRadius="full"
              variant="solid"
              colorScheme="orange"
            >
              <TagLabel>{tag}</TagLabel>
              <TagCloseButton onClick={() => onRemove(tag)} />
            </Tag>
          </WrapItem>
        ))}
      </Wrap>
    </>
  );
};

export default EditableFlavourNotes;
