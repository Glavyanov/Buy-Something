import { NavLink } from "react-router-dom";
import "./Login.css";
import { useAuthContext } from "../../contexts/AuthenticationContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

const errors = {};

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { values, onChangeHandler, onSubmit, possibleErrors } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit,
    errors
  );

  return (
    <section id="login">
      <form className="form-login" onSubmit={onSubmit} >
        <input
          type="email"
          placeholder="Email"
          name={LoginFormKeys.Email}
          value={values[LoginFormKeys.Email]}
          onChange={onChangeHandler}
        />
        {possibleErrors.email ? (
          <p className="form-error">{possibleErrors.email}</p>
        ) : null}
        <input
          type="password"
          placeholder="Password"
          name={LoginFormKeys.Password}
          value={values[LoginFormKeys.Password]}
          onChange={onChangeHandler}
        />
        {possibleErrors.password ? (
          <p className="form-error">{possibleErrors.password}</p>
        ) : null}
        <button>LOG IN</button>
        <p>
          DON'T HAVE AN ACCOUNT ?
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-active login" : "nav-non-active login"
            }
            to="/register"
          >
            CREATE ONE.
          </NavLink>
        </p>
      </form>
    </section>
  );
};
