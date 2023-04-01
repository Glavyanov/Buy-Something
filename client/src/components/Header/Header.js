import { NavLink } from "react-router-dom";

import "./Header.css";

export const Header = () => {
  return (
    <section className="header">
      <nav className="navigation">
        <ul role="list" className="navbar">
          <li className="navbar__item__logo">
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-non-active"
              }
              to="/"
            >
              <i
                className="fa-regular fa-gem fa-2xl"
                style={{ color: "#41cffd" }}
              ></i>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-non-active"
              }
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-active" : "nav-non-active"
              }
              to="/register"
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </section>
  );
};
