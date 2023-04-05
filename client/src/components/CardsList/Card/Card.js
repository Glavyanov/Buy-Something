import { useAuthContext } from "../../../contexts/AuthenticationContext.js";
import { Link } from "react-router-dom";

export const Card = ({ summary, imageUrl, category, title, _id }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="card">
      <img src={imageUrl} alt="image" />
      <section>
        <h3>{title}</h3>
        <p>{summary}</p>
      </section>
      <footer>
        <p>{category}</p>
        {isAuthenticated ? <Link to={`/details/${_id}`}><button id="btn-details">See details</button></Link> : null}
      </footer>
    </div>
  );
};
