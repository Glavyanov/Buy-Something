import "./CardDelete.css";

export const CardDelete = ({ onDelete, onCloseHandler }) => {
  return (
    <>
      <div onClick={onCloseHandler} id="card-del-back"></div>
      <div id="dialog">
        <p>Are you sure you want to delete this record?</p>
        <div id="dialogBtn">
          <button onClick={onDelete}>OK</button>
          <button onClick={onCloseHandler}>Cancel</button>
        </div>
      </div>
    </>
  );
};
