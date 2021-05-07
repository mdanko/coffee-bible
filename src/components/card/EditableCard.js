import { Field, FieldArray, Form, Formik } from 'formik';
import {
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  IconButton,
  Input,
} from '@chakra-ui/react';
import { useCoffee } from '../../context/CoffeeContext';
import EditableFlavourNotes from '../flavourNotes/EditableFlavourNotes';
import EditableRating from '../rating/EditableRating';
import EditableProcess from '../process/EditableProcess';
import EditableImage from '../image/EditableImage';
import EditableUnusualFlavour from '../unusualFlavour/EditableUnusualFlavour';
import PropTypes from 'prop-types';
import { CheckIcon, CloseIcon } from '@chakra-ui/icons';
import { upload } from '../../api/file';

const EditableCard = ({ onConfirm, onCancel, data }) => {
  const { editCoffee } = useCoffee();
  const validateRequired = value => {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  };

  return (
    <Flex
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
      flexDirection="column"
      position="relative"
    >
      <Formik
        initialValues={{
          ...data,
          image: {
            src: data.image,
            file: null,
          },
        }}
        onSubmit={async (values, actions) => {
          const imageUrl =
            values.image.file === null
              ? values.image.src
              : await upload(values.image.file);

          actions.setSubmitting(false);
          fetch(`https://coffee-bible.herokuapp.com/api/coffee/${data._id}`, {
            method: 'PUT',
            body: JSON.stringify({
              ...data,
              ...values,
              image: imageUrl,
            }),
            headers: { 'Content-Type': 'application/json' },
          })
            .then(res => res.json())
            .then(json => {
              console.log(json);
              editCoffee({ ...data, ...values, image: imageUrl });
              URL.revokeObjectURL(values.image.src);
              onConfirm();
            });
        }}
      >
        {({ setFieldValue, values, isSubmitting }) => (
          <Form>
            <Flex justifyContent="space-between">
              <HStack>
                <IconButton
                  aria-label="Confirm edit"
                  size="md"
                  variant="outline"
                  colorScheme="orange"
                  icon={<CheckIcon />}
                  type="submit"
                  isLoading={isSubmitting}
                />
                <IconButton
                  aria-label="Cancel edit"
                  size="md"
                  variant="outline"
                  colorScheme="orange"
                  icon={<CloseIcon />}
                  onClick={onCancel}
                />
              </HStack>
              <Field key="rating" name="rating" validate={validateRequired}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.rating && form.touched.rating}
                    isRequired
                  >
                    <EditableRating
                      value={field.value}
                      onChange={value => setFieldValue('rating', value)}
                    />
                  </FormControl>
                )}
              </Field>
            </Flex>
            <Field key="isUnusual" name="isUnusual">
              {({ field }) => (
                <FormControl>
                  <EditableUnusualFlavour
                    value={field.value}
                    onChange={value => setFieldValue('isUnusual', value)}
                  />
                </FormControl>
              )}
            </Field>
            <Field key="image" name="image">
              {({ field }) => (
                <FormControl>
                  <EditableImage
                    src={field.value.src}
                    onChange={value => setFieldValue('image', value)}
                  />
                </FormControl>
              )}
            </Field>
            <Field key="roastery" name="roastery" validate={validateRequired}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.roastery && form.touched.roastery}
                  isRequired
                >
                  <Input {...field} id="roastery" />
                  <FormErrorMessage>{form.errors.roastery}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <HStack>
              <Field key="country" name="country" validate={validateRequired}>
                {({ field, form }) => (
                  <FormControl
                    isInvalid={form.errors.country && form.touched.country}
                    isRequired
                  >
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
                    <Input {...field} id="farm" />
                    <FormErrorMessage>{form.errors.farm}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </HStack>
            <Field key="process" name="process" validate={validateRequired}>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.process && form.touched.process}
                  isRequired
                >
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
                  <EditableFlavourNotes
                    flavourNotes={values.flavourNotes}
                    onAdd={value => {
                      push(value);
                    }}
                    onRemove={value =>
                      remove(
                        values.flavourNotes.findIndex(item => item === value)
                      )
                    }
                  />
                </FormControl>
              )}
            />
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

EditableCard.propTypes = {
  closeDialog: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export default EditableCard;
