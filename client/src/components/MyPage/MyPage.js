import "./MyPage.css";
import { NavLink } from "react-router-dom";
import {useAuthContext} from "../../contexts/AuthenticationContext";

export const MyPage = () => {
  const { isAuthenticated } = useAuthContext();

  return (
    <section id="my-page">
      <h1>My Page</h1>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active append" : "nav-non-active append"
          }
          to={isAuthenticated ? "/appendad" : "/login"}
          type="button"
        >
          Append New Ad
        </NavLink>
      </nav>
    </section>
  );
};
