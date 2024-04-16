import '../styles/TopNavigationBar.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopNavigation = ({loggedIn, setLoggedIn, email, userType, orgId}) => {
  const navigate = useNavigate();
  console.log('TopNavigation:', loggedIn, email);

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/home');
  };

  return (
    <div className="top-nav-bar">
      <Link to="/home" className="top-nav-bar__logo">Wild Link</Link>
      
      <div className="top-nav-bar__links">
        <Link to="/patientstories" className="top-nav-bar__patient-stories">Patient Stories</Link>
        <span className="top-nav-bar__about-us">About Us</span>
        <Link to="/donate" className="top-nav-bar__donate">Donate</Link>
        <Link to="/contactus" className="top-nav-bar__contactus">Contact Us</Link>
        </div>

        <div className="top-nav-bar__login-register">
        {loggedIn ? (
          <>
            <span className="top-nav-bar__login-message">{email}</span>
            {userType === 'user' ? (
               <Link to="/users" className="top-nav-bar__dashboard">View Profile</Link>
            ) : (
              <Link to={`/organizations/${orgId}/profile`} className="top-nav-bar__dashboard">View Profile</Link>
            )}
            <button onClick={handleLogout} className="top-nav-bar__logout">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="top-nav-bar__login">Login</Link>
            <Link to="/register" className="top-nav-bar__register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default TopNavigation;