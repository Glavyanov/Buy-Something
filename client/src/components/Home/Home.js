import { CardList } from "../CardsList/CardsList";

export const Home = ({
    ads,
}) => {
    return (
        <article className="home">
            <CardList ads={ads} />
        </article>
    );
}