import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import Button from "../Button/Button";
import css from "./ContactForm.module.css";

import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string().min(3, "To short").max(50, "To Long").required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]*$/, "Allowed numbers and dashes only")
    .min(3, "To short")
    .max(50, "To long")
    .required("Required"),
});

export default function ContactForm() {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleForm = (contact) => {
    dispatch(addContact(contact));
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={FeedbackSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        handleForm(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className={css.form}>
          <div className={css["group-field"]}>
            <label htmlFor={nameFieldId} className={css.label}>
              Name
            </label>
            <Field
              type="text"
              name="name"
              id={nameFieldId}
              className={css.input}
            />
            {touched.name && errors.name && (
              <ErrorMessage
                name="name"
                component="p"
                className={css["error-message"]}
              />
            )}
          </div>

          <div className={css["group-field"]}>
            <label htmlFor={numberFieldId} className={css.label}>
              Number
            </label>
            <Field
              type="text"
              name="number"
              id={numberFieldId}
              className={css.input}
            />
            {touched.number && errors.number && (
              <ErrorMessage
                name="number"
                component="p"
                className={css["error-message"]}
              />
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            color="white"
            className={css["form-btn"]}
          >
            Add contact
          </Button>
        </Form>
      )}
    </Formik>
  );
}
