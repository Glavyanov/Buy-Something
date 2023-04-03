import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthenticationContext";

import "./Header.css";

export const Header = () => {
  const context = useAuthContext();

  const isAuthenticated = context.isAuthenticated;
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
          {isAuthenticated ? (
            <li>
              <p id="greet">Hello {context.userEmail}</p>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-active" : "nav-non-active"
                }
                to="/mypage"
              >
                My Page
              </NavLink>
            </li>
          ) : (
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
          )}
        </ul>
      </nav>
    </section>
  );
};
