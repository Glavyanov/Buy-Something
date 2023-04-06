import './NotFound.css';
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();

  const onClickOk = () => {
    navigate('/');
  };

  return (
    <>
      <div class="error _s">
        <div class="banner">
          404 - Page Not Found
          <div class="close _s" onClick={onClickOk}></div>
        </div>
        <div class="content">
          <div class="redX"></div>
          <div class="text">A wild 404-PAGE appeared!</div>
          <div class="btn _s">
            <div class="dash" onClick={onClickOk}>OK</div>
          </div>
        </div>
      </div>
    </>
  );
};
