import {NavLink} from 'react-router-dom';
import { CardList } from "../CardsList/CardsList";
import { useAdContext } from "../../contexts/AdContext";

import './Home.css';

export const Home = () => {

  const {sevenCards} = useAdContext();

  return (
    <article className="home">
      <NavLink
        className={({ isActive }) =>
          isActive ? "nav-active" : "nav-non-active"
        }
        to="/catalog"
      >
        Catalog
      </NavLink>
      <CardList cards={sevenCards}/>
    </article>
  );
};
