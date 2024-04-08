import '../styles/TopNavigationBar.scss';

const TopNavigation = (props) => {
  
  const {  returnHome } = props;

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo" onClick={() => {returnHome()}} >Wild Link</span>
      <div className="top-nav-bar__links">
        <span className="top-nav-bar__patient-stories">Patient Stories</span>
        <span className="top-nav-bar__about-us">About Us</span>
        </div>
        <div className="top-nav-bar__login-register">
          <span className="top-nav-bar__login">Login</span>
          <span className="top-nav-bar__register">Register</span>
        </div>
        </div>
  );
};

export default TopNavigation;