import "./AppendAd.css";
import { useForm } from "../../../hooks/useForm";
import { useAdContext } from "../../../contexts/AdContext";

const errors = {}; //

export const AppendAd = () => {
  const { onCreateAdSubmit } = useAdContext();

  const { values, onChangeHandler, onSubmit, possibleErrors } = useForm(
    {
      title: "",
      category: "",
      imageUrl: "",
      summary: "",
    },
    onCreateAdSubmit,
    errors
  );
  return (
    <section id="append-ad">
      <form className="form-ad" onSubmit={onSubmit}>
        <input
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
          type="url"
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
        <button>Add</button>
      </form>
    </section>
  );
};
