import { CardList } from "../CardsList/CardsList";
import { useAdContext } from "../../contexts/AdContext";
import { useState, useEffect } from "react";

export const Catalog = () => {

  const [values, setFormValues] = useState([]);
  const [optionValues, setOptionValues] = useState("summary");
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
    setCatalogCards(cardsAll.filter(c => c[optionValues]?.toLowerCase().includes(values.toLowerCase())));
  };

  const onChangeSelectMenu = (e) =>{
    setOptionValues(e.target.value);
  };

  return (
    <article className="home">
      <form onSubmit={onSubmitSearch}>
        <input type="text" value={values} onChange={onChangeHandler} />
        <button>Search</button>
        <div className="filter">
                <span style={{color: "#a52a2a"}}>Search Criteria: </span>
                <select name="criteria" className="criteria" value={optionValues} onChange={onChangeSelectMenu}>
                    <option value="summary" >Summary</option>
                    <option value="category" >Category</option>
                    <option value="title" >Title</option>
                </select>
            </div>
      </form>
      <CardList cards={catalogCards} />
    </article>
  );
};
