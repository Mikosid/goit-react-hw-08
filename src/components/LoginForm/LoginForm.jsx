import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { selectIsLoading } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

export default function LoginForm() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = (values, actions) => {
    dispatch(logIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form} autoComplete="off">
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
        <button type="submit" disabled={isLoading} className={css.button}>
          Log In
        </button>
      </Form>
    </Formik>
  );
}
