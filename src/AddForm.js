import React, { useRef } from 'react';
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
} from '@chakra-ui/react';
import { useCoffee } from './context/CoffeeContext';
import { AddIcon } from '@chakra-ui/icons';

const AddForm = ({ closeDialog }) => {
  const { addCoffee } = useCoffee();
  const notesInputRef = useRef(null);

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
      }}
      onSubmit={async (values, actions) => {
        await new Promise(resolve => setTimeout(resolve, 500));
        addCoffee({ ...values, notes: [values.notes] });
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
            render={({ push }) => (
              <FormControl>
                <FormLabel htmlFor="process">Notes</FormLabel>
                <InputGroup name="notes" id="notes">
                  <Input ref={notesInputRef} />
                  <InputRightElement>
                    <IconButton
                      aria-label="Add coffee"
                      icon={<AddIcon />}
                      variant="ghost"
                      colorScheme="orange"
                      onClick={() => {
                        push(notesInputRef.current.value);
                        notesInputRef.current.value = '';
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
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </FormControl>
            )}
          />
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
