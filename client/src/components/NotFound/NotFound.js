import "./NotFound.css";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const onClickOk = () => {
    navigate("/");
  };

  return (
    <>
      <div className="error _s">
        <div className="banner">
          404 - Page Not Found
          <div className="close _s" onClick={onClickOk}></div>
        </div>
        <div className="content">
          <div className="redX"></div>
          <div className="text">A wild 404-PAGE appeared!</div>
          <div className="btn _s">
            <div className="dash" onClick={onClickOk}>
              OK
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
