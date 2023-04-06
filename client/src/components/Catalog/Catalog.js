import { CardList } from "../CardsList/CardsList";
import { useAdContext } from '../../contexts/AdContext'

export const Catalog = () => {
    const {cardsAll} = useAdContext();

  return (
    <article className="home">
      <CardList cards={cardsAll}/>
    </article>
  );
};
