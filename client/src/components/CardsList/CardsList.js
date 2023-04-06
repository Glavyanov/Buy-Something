import "./CardsList.css";

import { Card } from "./Card/Card";
import { useAdContext } from "../../contexts/AdContext";


export const CardList = () => {
  
  const {cards} = useAdContext();

  return (
    <section className="layout-masonry">
      {cards?.length ? (
        cards.map((c) => <Card key={c._id} {...c} />)
      ) : (
        <p>Sorry we have no ads yet!</p>
      )}
    </section>
  );
};
