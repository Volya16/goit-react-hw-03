import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";

import style from "./ContactForm.module.css";

export default function ContactForm() {
  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <Formik>
      <Form className={style.form}>
        <div className={style.fieldWrapper}>
          <label className={style.label} htmlFor="nameId">
            Name
          </label>
          <Field
            className={style.field}
            type="text"
            name="username"
            id="nameId"
          ></Field>
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
        </div>
        <button className={style.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
