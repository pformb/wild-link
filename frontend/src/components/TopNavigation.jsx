import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";
import FullLogo_Transparent from "../FullLogo_Transparent.png";

const TopNavigation = () => {
  const { user, logout } = useAuth();

  // Access roles and orgId from user
  const orgId = user?.orgId;

  console.log('checking if user is logged in:');
  if (user) {
    console.log(`Creating link to user profile. usersId: ${user.userId}`);
  }
  
  return (
<AppBar position="static" style={{ 
  background: 'linear-gradient(90deg, rgba(245, 222, 179, 1) 0%, rgba(33,94,33,1) 100%)', 
  boxShadow: '0 4px 6px -6px #222', 
  height: '72px' 
}}>
       <Toolbar style={{ padding: 0 }}>
       <Typography variant="h6" style={{ flexGrow: 3, fontFamily: "'Luckiest Guy', cursive", fontSize: '38px' }}>
       <RouterLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>Wild Link</RouterLink>
          </Typography>

        <Box display="flex" justifyContent="flex-start" style={{ padding: '20px' }}>
          <RouterLink to="/patientstories" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Patient Stories</RouterLink>
          <RouterLink to="/aboutus" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>About Us</RouterLink>
          <RouterLink to="/contactus" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Contact Us</RouterLink>
        

        {user && <RouterLink to="/donate" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Donate</RouterLink>}

        </Box>

        <div className="top-nav-bar__login-register">
        {user ? (
  <>
    <span className="top-nav-bar__login-message">Hello, {user.first_name}!</span>
    {user.orgId ? (
      <RouterLink to={`/organizations/${orgId}/profile`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'white', padding: '20px' }}>View Profile</RouterLink>
    ) : (
      <RouterLink to={`/users/${user.userId}`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'white', padding: '20px' }}>View Profile</RouterLink>
    )}
    <button onClick={logout} className="top-nav-bar__logout">Logout</button>
  </>
) : (
  <>
     <RouterLink to="/login" className="top-nav-bar__login" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Login</RouterLink>
    <RouterLink to="/register" className="top-nav-bar__register" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Register</RouterLink>
  </>
)}
      </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;