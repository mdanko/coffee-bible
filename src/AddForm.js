import React from 'react';
import { Field, Form, Formik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from '@chakra-ui/react';
import { useCoffee } from './context/CoffeeContext';

const AddForm = ({ closeDialog }) => {
  const { addCoffee } = useCoffee();

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
        notes: '',
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
          <Field key="notes" name="notes">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.notes && form.touched.notes}>
                <FormLabel htmlFor="notes">Notes</FormLabel>
                <Input {...field} id="notes" />
                <FormErrorMessage>{form.errors.notes}</FormErrorMessage>
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
