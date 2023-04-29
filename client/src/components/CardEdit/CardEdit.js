import "./CardEdit.css";
import { useAdContext } from "../../contexts/AdContext";
import { useForm } from "../../hooks/useForm";

const errors = {};

export const CardEdit = ({ card }) => {
  const { onEditAdSubmit } = useAdContext();

  const { values, onChangeHandler, onSubmit, possibleErrors } = useForm(
    {
      title: card.title,
      category: card.category,
      imageUrl: card.imageUrl,
      summary: card.summary,
    },
    onEditAdSubmit.bind(null, card._id),
    errors
  );

  return (
    <div id="card-edit">
      <div id="edit-content">
        <h1>Edit page</h1>
        <section id="append-ad-edit">
          <form className="form-ad-edit" onSubmit={onSubmit}>
            <input
              id="edit-input"
              type="text"
              name="title"
              placeholder="title"
              value={values.title}
              onChange={onChangeHandler}
              onKeyUp={onChangeHandler}
            />
            {possibleErrors.title ? (
              <p className="form-error append">{possibleErrors.title}</p>
            ) : null}
            <input
              id="edit-input"
              type="text"
              name="category"
              placeholder="category"
              value={values.category}
              onChange={onChangeHandler}
              onKeyUp={onChangeHandler}
            />
            {possibleErrors.category ? (
              <p className="form-error append">{possibleErrors.category}</p>
            ) : null}
            <input
              id="edit-input"
              type="text"
              name="imageUrl"
              placeholder="Image URL"
              value={values.imageUrl}
              onChange={onChangeHandler}
              onKeyUp={onChangeHandler}
            />
            {possibleErrors.imageUrl ? (
              <p className="form-error append">{possibleErrors.imageUrl}</p>
            ) : null}
            <textarea
              id="edit-area"
              type="text"
              name="summary"
              placeholder="Summary..."
              rows="5"
              value={values.summary}
              onChange={onChangeHandler}
              onKeyUp={onChangeHandler}
            ></textarea>
            {possibleErrors.summary ? (
              <p className="form-error append">{possibleErrors.summary}</p>
            ) : null}
            <button>Edit</button>
          </form>
        </section>
      </div>
    </div>
  );
};
