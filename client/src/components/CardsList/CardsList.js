import "./CardsList.css";

import { Card } from "./Card/Card";

export const CardList = ({ ads }) => {
  return (
    <section className="layout-masonry">
      {ads?.length ? (
        ads.map((c) => <Card key={c._id} {...c} />)
      ) : (
        <p>Sorry we have no ads yet!</p>
      )}
    </section>
  );
};
