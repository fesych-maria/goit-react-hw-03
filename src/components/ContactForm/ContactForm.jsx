import { Formik, Form, Field } from "formik";
import { nanoid } from "nanoid/non-secure";
import { useId } from "react";

const ContactForm = () => {
  const nameFieldId = useId();
  const phoneFieldId = useId();
  const contactId = nanoid();

  const initialValues = {
    username: "",
    phone: "",
  };

  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="username" id={nameFieldId}></Field>
        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="number" name="phone" id={phoneFieldId}></Field>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
