import '../styles/TopNavigationBar.scss';
import { Link } from 'react-router-dom';

const TopNavigation = () => {

  return (
    <div className="top-nav-bar">
      <Link to="/home" className="top-nav-bar__logo">Wild Link</Link>
      <div className="top-nav-bar__links">
        <span className="top-nav-bar__patient-stories">Patient Stories</span>
        <span className="top-nav-bar__about-us">About Us</span>
        </div>
        <div className="top-nav-bar__login-register">
        <Link to="/login" className="top-nav-bar__login">Login</Link>
        <Link to="/register" className="top-nav-bar__register">Register</Link>
        </div>
        </div>
  );
};

export default TopNavigation;