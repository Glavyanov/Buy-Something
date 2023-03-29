import { NavLink } from "react-router-dom";
import './Login.css';

export const Login = ({
    onLoginSubmit,
}) => {
  return (
    <section id="login">
      <form onSubmit={onLoginSubmit} className="form-login">
        <input type="email" placeholder="Email"/>
        <input type="password" placeholder="Password"/>
        <button>LOG IN</button>
        <p>DON'T HAVE AN ACCOUNT ?  
            <NavLink className={({isActive}) => isActive ? 'nav-active login' : 'nav-non-active login'} to="/register">CREATE ONE.</NavLink>
        </p>
      </form>
    </section>
  );
};
