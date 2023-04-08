import { useParams, Link, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import * as cardService from "../../services/cardsServise.js";
import { useAuthContext } from "../../contexts/AuthenticationContext";

import "./CardDetails.css";
import { NotFound } from "../NotFound/NotFound.js";
import { CardEdit } from "../CardEdit/CardEdit.js";

export const CardDetails = () => {
  const { cardId } = useParams();
  const [ad, setAd] = useState([]);
  const { isAuthenticated, userId } = useAuthContext();

  useEffect(() => {
    cardService.getOne(cardId).then((res) => {
      setAd(res);
    });
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <section id="card-details">
          <h1>Details</h1>
          <div className="info-section">
            <div className="card-header">
              <div className="img-container">
                <img className="card-img" src={ad.imageUrl} alt="Ad" />
              </div>
              <h1>{ad.title}</h1>
              <span className="category">
                <strong>Category: </strong>
                {ad.category}
              </span>
              {ad?._ownerId === userId ? (
                <Link to="edit">
                  <button className="edit-details-btn">EDIT</button>
                </Link>
              ) : null}
            </div>

            <p className="text">{ad.summary}</p>

            <div className="details-comments">
              <h2>Comments:</h2>
              <ul>
                {<li>Hello from comments</li>}
                {<li>Hello from comments</li>}
                {<li>Hello from comments</li>}
                {/* {game.comments && game.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.email}: {x.comment}</p>
                            </li>
                        ))} */}
              </ul>

              {/* {!game.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )} */}
            </div>

            {/* {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )} */}
          </div>

          {/* isAuthenticated */}
        </section>
      ) : (
        <NotFound />
      )}
      <Routes>
        <Route path="/edit" element={<CardEdit card={ad} />} />
      </Routes>
    </>
  );
};
