import { Card } from "./Card/Card";

export const MyCardsList = ({ cards }) => {
  return (
    <>
      {cards?.length ? (
        cards.map((c) => <Card key={c._id} {...c} owner={true}/>)
      ) : (
        <div className="empty-content">
          <p>Your ads list is empty!</p>
        </div>
      )}
    </>
  );
};
