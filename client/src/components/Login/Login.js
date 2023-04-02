import { NavLink } from "react-router-dom";
import "./Login.css";
import { useAuthContext } from "../../contexts/AuthenticationContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: "email",
  Password: "password",
};

export const Login = () => {
  const { onLoginSubmit } = useAuthContext();
  const { values, onChangeHandler, onSubmit } = useForm(
    {
      [LoginFormKeys.Email]: "",
      [LoginFormKeys.Password]: "",
    },
    onLoginSubmit
  );

  return (
    <section id="login">
      <form className="form-login" method="POST" onSubmit={onSubmit} >
        <input
          type="email"
          placeholder="Email"
          name={LoginFormKeys.Email}
          value={values[LoginFormKeys.Email]}
          onChange={onChangeHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name={LoginFormKeys.Password}
          value={values[LoginFormKeys.Password]}
          onChange={onChangeHandler}
        />
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
