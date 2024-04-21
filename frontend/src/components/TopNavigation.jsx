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
    <AppBar position="sticky" style={{
      background: '#A89A1E',
      boxShadow: '0 4px 6px -6px #222',
      height: '72px'
    }}>
      <Toolbar style={{ padding: 0 }}>
        <Box display="flex" justifyContent="flex-start" alignItems="flex-end" alignSelf="flex-start" style={{ flexGrow: 3 }}>
          <Typography variant="h6" style={{ fontFamily: "'Zilla Slab', Arial, sans-serif", fontSize: '38px' }}>
            <RouterLink to="/home" style={{ textDecoration: 'none', color: 'white', fontFamily: "'Zilla Slab', Arial, sans-serif", paddingLeft: '10px' }}>
            <img src={FullLogo_Transparent} alt="Home" style={{ width: '100px', height: '100px' }} />
            </RouterLink>
          </Typography>
        </Box>

        <Box display="flex" justifyContent="flex-start" style={{ padding: '20px' }}>
          <RouterLink to="/patientstories" style={{ textDecoration: 'none', color: 'white', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif" }}>Patient Stories</RouterLink>
        </Box>

        <div className="top-nav-bar__login-register" style={{ paddingRight: '10px' }}>
          {user ? (
            <>
              <span className="top-nav-bar__login-message">Hello, {user.first_name}!</span>
              {user.orgId ? (
                <RouterLink to={`/organizations/${orgId}/profile`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'white', padding: '20px', fontFamily: "'Zilla Slab', Arial, sans-serif" }}>View Profile</RouterLink>
              ) : (
                <RouterLink to={`/users/${user.userId}`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'white', padding: '20px', fontFamily: "'Zilla Slab', Arial, sans-serif" }}>View Profile</RouterLink>
              )}
              <button onClick={logout} className="top-nav-bar__logout">Logout</button>
            </>
          ) : (
            <>
              <RouterLink to="/login" className="top-nav-bar__login" style={{ textDecoration: 'none', color: 'white', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif" }}>Login</RouterLink>
              <RouterLink to="/register" className="top-nav-bar__register" style={{ textDecoration: 'none', color: 'white', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif" }}>Register</RouterLink>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;

/** dead code 
 * background: 'linear-gradient(90deg, rgba(245, 222, 179, 1) 0%, rgba(33,94,33,1) 100%)',
 */