import {NavLink} from 'react-router-dom';
import { CardList } from "../CardsList/CardsList";
import './Home.css';

export const Home = ({ ads }) => {
  return (
    <article className="home">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-active" : "nav-non-active"
        }
        to="/register"
      >
        Catalog
      </NavLink>
      <CardList ads={ads} />
    </article>
  );
};
