import React, { useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import {
  Button,
  IconButton,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Tag,
  TagLabel,
  WrapItem,
  Wrap,
  TagCloseButton,
  Box,
} from '@chakra-ui/react';
import { useCoffee } from './context/CoffeeContext';
import { AddIcon, StarIcon } from '@chakra-ui/icons';

const AddForm = ({ closeDialog }) => {
  const { addCoffee } = useCoffee();
  const [note, setNote] = useState('');
  const [rating, setRating] = useState(0);
  const getIsAddNoteDisabled = notes => note === '' || notes.includes(note);

  const validateRequired = value => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  };

  return (
    <Formik
      initialValues={{
        roastery: '',
        country: '',
        farm: '',
        process: '',
        notes: [],
        rating: 0,
      }}
      onSubmit={async (values, actions) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        addCoffee({ ...values });
        actions.setSubmitting(false);
        closeDialog();
      }}
    >
      {props => (
        <Form>
          <Field key="roastery" name="roastery" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.roastery && form.touched.roastery}
                isRequired
              >
                <FormLabel htmlFor="roastery">Roastery</FormLabel>
                <Input {...field} id="roastery" />
                <FormErrorMessage>{form.errors.roastery}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="country" name="country" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.country && form.touched.country}
                isRequired
              >
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input {...field} id="country" />
                <FormErrorMessage>{form.errors.country}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="farm" name="farm" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.farm && form.touched.farm}
                isRequired
              >
                <FormLabel htmlFor="farm">Farm</FormLabel>
                <Input {...field} id="farm" />
                <FormErrorMessage>{form.errors.farm}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="process" name="process" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.process && form.touched.process}
                isRequired
              >
                <FormLabel htmlFor="process">Process</FormLabel>
                <Select
                  {...field}
                  placeholder="Select process type"
                  id="process"
                >
                  <option value="WASHED" label="Washed" />
                  <option value="NATURAL" label="Natural" />
                  <option value="HONEY" label="Honey" />
                </Select>
                <FormErrorMessage>{form.errors.process}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FieldArray
            key="notes"
            name="notes"
            render={({ push, remove }) => (
              <FormControl>
                <FormLabel htmlFor="process">Notes</FormLabel>
                <InputGroup name="notes" id="notes">
                  <Input value={note} onChange={e => setNote(e.target.value)} />
                  <InputRightElement>
                    <IconButton
                      aria-label="Add note"
                      icon={<AddIcon />}
                      variant="ghost"
                      colorScheme="orange"
                      isDisabled={getIsAddNoteDisabled(props.values.notes)}
                      onClick={() => {
                        push(note);
                        setNote('');
                      }}
                    />
                  </InputRightElement>
                </InputGroup>
                <Wrap mt={4} spacing={4}>
                  {props.values.notes.map(tag => (
                    <WrapItem>
                      <Tag
                        size="lg"
                        key={tag}
                        borderRadius="full"
                        variant="solid"
                        colorScheme="orange"
                      >
                        <TagLabel>{tag}</TagLabel>
                        <TagCloseButton
                          onClick={() =>
                            remove(
                              props.values.notes.findIndex(item => item === tag)
                            )
                          }
                        />
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </FormControl>
            )}
          />
          <Field key="rating" name="rating" validate={validateRequired}>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.rating && form.touched.rating}
                isRequired
              >
                <FormLabel htmlFor="rating">Rating</FormLabel>
                <Box d="flex" alignItems="center">
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <IconButton
                        key={i}
                        variant="ghost"
                        colorScheme="orange"
                        aria-label={`Rate ${i}`}
                        size="md"
                        icon={<StarIcon />}
                        color={i <= field.value ? 'orange.200' : 'gray.300'}
                        onClick={() => props.setFieldValue('rating', i)}
                      />
                    ))}
                </Box>
              </FormControl>
            )}
          </Field>
          <Button
            mt={8}
            mb={4}
            float="right"
            colorScheme="orange"
            isLoading={props.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddForm;
