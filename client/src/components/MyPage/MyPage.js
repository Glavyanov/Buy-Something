import "./MyPage.css";
import { NavLink } from "react-router-dom";

export const MyPage = () => {
  return (
    <section id="my-page">
      <h1>My Page</h1>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-active append" : "nav-non-active append"
          }
          to="/appendad"
          type="button"
        >Append New Ad</NavLink>
      </nav>
    </section>
  );
};
