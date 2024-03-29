import { Field, FieldArray, Form, Formik } from 'formik';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useCoffee } from '../../context/CoffeeContext';
import EditableFlavourNotes from '../flavourNotes/EditableFlavourNotes';
import EditableRating from '../rating/EditableRating';
import EditableProcess from '../process/EditableProcess';
import UploadImageInput from '../image/UploadImageInput';
import EditableUnusualFlavour from '../unusualFlavour/EditableUnusualFlavour';
import PropTypes from 'prop-types';
import { upload } from '../../api/file';

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
        isUnusual: false,
      }}
      onSubmit={async (values, actions) => {
        debugger;
        const imageUrl = await upload(values.image);

        actions.setSubmitting(false);
        fetch('https://coffee-bible.herokuapp.com/api/coffee/', {
          method: 'POST',
          body: JSON.stringify({
            ...values,
            image: imageUrl,
          }),
          headers: { 'Content-Type': 'application/json' },
        })
          .then(res => res.json())
          .then(json => {
            debugger;
            console.log(json);
            addCoffee({ ...values, image: imageUrl });
            closeDialog();
          });
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
          <Field key="isUnusual" name="isUnusual">
            {({ field }) => (
              <FormControl>
                <FormLabel htmlFor="isUnusual">Unusual Flavor</FormLabel>
                <EditableUnusualFlavour
                  value={field.value}
                  onChange={value => props.setFieldValue('isUnusual', value)}
                />
              </FormControl>
            )}
          </Field>
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
                <UploadImageInput
                  onChange={e =>
                    props.setFieldValue('image', e.target.files[0])
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

AddForm.propTypes = {
  closeDialog: PropTypes.func.isRequired,
};

export default AddForm;
