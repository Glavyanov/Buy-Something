import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <section className="footer">
        <div>&#174; 2023 - By Something</div>
        <p>
          Do you have any questions? <b>Email us</b>
        </p>
      </section>
      <a href="#">
        <div id="fixed">
          <div id="fixed-flex">
            <i className="fa-solid fa-angles-up fa-2xl"></i>
          </div>
        </div>
      </a>
    </>
  );
};
