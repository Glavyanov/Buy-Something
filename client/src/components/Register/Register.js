import "./Register.css";

export const Register = ({ onRegisterSubmit }) => {
  return (
    <section id="register">
      <form onSubmit={onRegisterSubmit} className="form-register">
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button>REGISTER NOW</button>
      </form>
    </section>
  );
};
