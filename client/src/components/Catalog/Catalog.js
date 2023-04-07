import { CardList } from "../CardsList/CardsList";
import { useAdContext } from "../../contexts/AdContext";
import { useState, useEffect } from "react";

export const Catalog = () => {
  
  const [values, setFormValues] = useState([]);
  const[catalogCards, setCatalogCards] = useState([]);

  const { cardsAll } = useAdContext();

  const onChangeHandler = (e) => {
      setFormValues(e.target.value);
  };

  useEffect(()=>{
    setCatalogCards(cardsAll);
  },[cardsAll]);
  
  const onSubmitSearch = (e) => {
    e.preventDefault();
    setCatalogCards(cardsAll.filter(c => c.title.toLowerCase().includes(values.toLowerCase())));
  };

  return (
    <article className="home">
      <form onSubmit={onSubmitSearch}>
        <input type="text" value={values} onChange={onChangeHandler} />
        <button>Search</button>
      </form>
      <CardList cards={catalogCards} />
    </article>
  );
};
