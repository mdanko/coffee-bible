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

const AddForm = () => {
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
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      {props => (
        <Form>
          <Field key="roastery" name="roastery">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.roastery && form.touched.roastery}
              >
                <FormLabel htmlFor="roastery">Roastery</FormLabel>
                <Input {...field} id="roastery" />
                <FormErrorMessage>{form.errors.roastery}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="country" name="country">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.country && form.touched.country}
              >
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input {...field} id="country" />
                <FormErrorMessage>{form.errors.country}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="farm" name="farm">
            {({ field, form }) => (
              <FormControl isInvalid={form.errors.farm && form.touched.farm}>
                <FormLabel htmlFor="farm">Farm</FormLabel>
                <Input {...field} id="farm" />
                <FormErrorMessage>{form.errors.farm}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Field key="process" name="process">
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.process && form.touched.process}
              >
                <FormLabel htmlFor="process">Process</FormLabel>
                <Select
                  {...field}
                  placeholder="Select process type"
                  id="process"
                >
                  <option key="WASHED">Washed</option>
                  <option key="NATURAL">Natural</option>
                  <option key="HONEY">Honey</option>
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
