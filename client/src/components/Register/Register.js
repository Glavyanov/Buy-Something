import "./Register.css";
import { useAuthContext } from "../../contexts/AuthenticationContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
  ConfirmPassword: "confirmPassword",
  FirstName: "firstName",
  LastName: "lastName",
};

const errors = {};

export const Register = () => {
  const { onRegisterSubmit } = useAuthContext();
  const { values, onChangeHandler, onSubmit, possibleErrors } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
      [LoginFormKeys.ConfirmPassword]: "",
      [LoginFormKeys.FirstName]: "",
      [LoginFormKeys.LastName]: "",
    },
    onRegisterSubmit,
    errors
  );

  return (
    <section id="register">
      <form onSubmit={onSubmit} className="form-register">
        <input
          type="text"
          name={LoginFormKeys.FirstName}
          placeholder="First name"
          value={values[LoginFormKeys.FirstName]}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
        />
         {possibleErrors.firstName ? (
          <p className="form-error">{possibleErrors.firstName}</p>
        ) : null}
        <input
          type="text"
          name={LoginFormKeys.LastName}
          placeholder="Last name"
          value={values[LoginFormKeys.LastName]}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
        />
        {possibleErrors.lastName ? (
          <p className="form-error">{possibleErrors.lastName}</p>
        ) : null}
        <input
        type="email"
        name={LoginFormKeys.Email}
        placeholder="Email"
        value={values[LoginFormKeys.Email]}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
        />
        {possibleErrors.email ? (
          <p className="form-error">{possibleErrors.email}</p>
        ) : null}
        <input
          type="password"
          name={LoginFormKeys.Password}
          placeholder="Password"
          value={values[LoginFormKeys.Password]}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
        />
        {possibleErrors.password ? (
          <p className="form-error">{possibleErrors.password}</p>
        ) : null}
        <input
          type="password"
          name={LoginFormKeys.ConfirmPassword}
          placeholder="Confirm password"
          value={values[LoginFormKeys.ConfirmPassword]}
          onChange={onChangeHandler}
          onKeyUp={onChangeHandler}
        />
        {possibleErrors.confirmPassword ? (
          <p className="form-error">{possibleErrors.confirmPassword}</p>
        ) : null}
        <button>REGISTER NOW</button>
      </form>
    </section>
  );
};
