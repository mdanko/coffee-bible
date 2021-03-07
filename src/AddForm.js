import { Field, FieldArray, Form, Formik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useCoffee } from './context/CoffeeContext';
import EditableFlavourNotes from './components/flavourNotes/EditableFlavourNotes';
import EditableRating from './components/rating/EditableRating';
import EditableProcess from './components/process/EditableProcess';
import UploadImage from './components/image/UploadImage';

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
        flavourNotes: [],
        rating: 0,
        image: '',
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
                <EditableProcess {...field} />
                <FormErrorMessage>{form.errors.process}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <FieldArray
            key="flavourNotes"
            name="flavourNotes"
            render={({ push, remove }) => (
              <FormControl>
                <FormLabel htmlFor="flavourNotes">Flavour Notes</FormLabel>
                <EditableFlavourNotes
                  flavourNotes={props.values.flavourNotes}
                  onAdd={value => {
                    push(value);
                  }}
                  onRemove={value =>
                    remove(
                      props.values.flavourNotes.findIndex(
                        item => item === value
                      )
                    )
                  }
                />
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
                <EditableRating
                  value={field.value}
                  onChange={value => props.setFieldValue('rating', value)}
                />
              </FormControl>
            )}
          </Field>
          <Field key="image" name="image">
            {() => (
              <FormControl>
                <FormLabel htmlFor="image">Image</FormLabel>
                <UploadImage
                  onChange={e =>
                    props.setFieldValue(
                      'image',
                      URL.createObjectURL(e.target.files[0])
                    )
                  }
                />
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
