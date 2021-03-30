import {
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import React from 'react';
import AddForm from './AddForm';

const AddDialog = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        aria-label="Add coffee"
        icon={<AddIcon />}
        variant="outline"
        colorScheme="orange"
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add Coffee</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <AddForm closeDialog={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddDialog;
