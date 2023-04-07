import { CardList } from "../CardsList/CardsList";
import { useAdContext } from "../../contexts/AdContext";
import { useState } from "react";
/* import { useForm } from "../../../hooks/useForm"; */

export const Catalog = () => {
  /* const [searched, setSearched] = useState([]); */
  const [values, setFormValues] = useState([]);

  /* const { values, onChangeHandler, onSubmit, possibleErrors } = useForm(
        {
          title: "",
          category: "",
          imageUrl: "",
          summary: "",
        },
        onCreateAdSubmit,
        errors
      ); */

  const { cardsAll } = useAdContext();

  const onChangeHandler = (e) => {
      setFormValues(e.target.value);
  };

  const onSubmitSearch = (e) => {
    e.preventDefault();
    console.log(values);
  };


  return (
    <article className="home">
      <form onSubmit={onSubmitSearch}>
        <input type="text" value={values} onChange={onChangeHandler} />
        <button>Search</button>
      </form>
      <CardList cards={cardsAll} />
    </article>
  );
};
