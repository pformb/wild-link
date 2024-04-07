import  '../styles/RegistrationPage.scss';

const RegistrationPage = () => {

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;