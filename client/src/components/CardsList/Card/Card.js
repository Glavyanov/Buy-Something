import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthenticationContext.js";
import { useAdContext } from "../../../contexts/AdContext.js";
import { CardDelete } from "../../CardDelete/CardDelete.js";

export const Card = ({ summary, imageUrl, category, title, _id, owner }) => {
  const { isAuthenticated } = useAuthContext();
  const {onClickDelete} = useAdContext();
  const [showDeleteCard, setShowDeleteCard] = useState(false);

  const onClickConfirmDelete = () => {
    setShowDeleteCard(true);
  }

  const onCloseHandler = () => {
    setShowDeleteCard(false);
  }

  return (
    <div className="card">
      <img src={imageUrl} alt="card icon" />
      <section>
        <h3>{title}</h3>
        <p>{summary}</p>
      </section>
      <footer>
        <p>{category}</p>
        {isAuthenticated ? <Link to={`/details/${_id}`}><button id="btn-details">See details</button></Link> : <Link to="/login"><button id="btn-details">See details</button></Link>}
        {owner ? <button id="btn-details" className="btn-delete" onClick={onClickConfirmDelete}><a href="#root">Delete</a></button>: null}
      </footer>
      {showDeleteCard && <CardDelete onCloseHandler={onCloseHandler} onDelete={() => onClickDelete(_id)} />}
    </div>
  );
};
