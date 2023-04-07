import { NavLink } from "react-router-dom";
import { useEffect, useState} from 'react'

import {useAuthContext} from "../../contexts/AuthenticationContext";
import { useAdContext } from "../../contexts/AdContext";

import "./MyPage.css";
import { MyCardsList } from "../CardsList/MyCardsList";


export const MyPage = () => {
  const { isAuthenticated, userId } = useAuthContext();
  const {getMyCards, cardsAll} = useAdContext();
  const [myCards, setMyCards] = useState([]);


  useEffect(() => {
    getMyCards(userId)
    .then(cards => {
      setMyCards(cards);
    });
  }, [userId, cardsAll]);

  return (
    <section id="my-page">
      <h1 className="my-page-title">My Ads</h1>
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
      <div id="my-page-content">
          <MyCardsList cards={myCards}/>
      </div>
    </section>
  );
};
