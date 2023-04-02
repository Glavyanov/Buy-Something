import "./CardsList.css";

import { Card } from "./Card/Card";
import { useAdContext } from "../../contexts/AdContext";


export const CardList = () => {
  const context = useAdContext();

  const ads = context.ads;

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
