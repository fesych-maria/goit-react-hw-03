import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid/non-secure";
import { useId } from "react";
import * as Yup from "yup";

const ContactForm = ({ addContacts }) => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short")
      .max(50, "Too long")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const id = nanoid();
    const contactData = { ...values, id };
    console.log(contactData);
    addContacts(contactData);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field name="number" id={numberFieldId} />
        <ErrorMessage name="number" component="span" />

        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
