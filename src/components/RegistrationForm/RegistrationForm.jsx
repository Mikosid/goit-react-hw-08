import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

import css from "./RegistrationForm.module.css";

export default function RegistrationForm() {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    console.log(values);
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
        <div className={css.formGroup}>
          <label className={css.text}>
            Username
            <Field className={css.input} type="text" name="name" />
          </label>
        </div>
        <div className={css.formGroup}>
          <label className={css.text}>
            Email
            <Field className={css.input} type="email" name="email" />
          </label>
        </div>
        <div className={css.formGroup}>
          <label className={css.text}>
            Password
            <Field className={css.input} type="password" name="password" />
          </label>
        </div>
        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}
