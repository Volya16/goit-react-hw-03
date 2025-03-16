import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import style from "./ContactForm.module.css";

const newUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Your name is too short")
    .max(50, "Your name is to long")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Your telephone number is too short")
    .max(50, "Your telephone number is too long")
    .required("This field is required"),
});

const initialNewContact = { name: "", number: "" };

export default function ContactForm({ onAdd }) {
  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = (data, actions) => {
    const newContact = { id: nanoid(), ...data };
    onAdd(newContact);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialNewContact}
      validationSchema={newUserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <div className={style.fieldWrapper}>
          <label className={style.label} htmlFor="nameId">
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="name"
            id="nameId"
          ></Field>
          <ErrorMessage className={style.error} name="name" component="span" />
        </div>
        <div className={style.fieldWrapper}>
          <label className={style.label} htmlFor="numberId">
            Number
          </label>
          <Field
            className={style.field}
            type="tel"
            name="number"
            id="numberId"
          ></Field>
          <ErrorMessage
            className={style.error}
            name="number"
            component="span"
          />
        </div>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

// export default function ContactForm(onAdd)
