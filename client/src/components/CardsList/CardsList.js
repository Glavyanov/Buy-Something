import { Card } from "./Card/Card";

import "./CardsList.css";

export const CardList = ({
  cards
}) => {
  
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
