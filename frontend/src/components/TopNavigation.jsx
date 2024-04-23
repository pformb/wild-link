import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
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
      background: 'linear-gradient(to bottom, #A89A1E 0%, #DBCA2A 50%, white 75%, white 100%)',
      boxShadow: '0 4px 6px -6px #222',
      height: '72px',
    }}>
      <Toolbar style={{ padding: 0 }}>
      <Box display="flex" justifyContent="flex-start" alignItems="flex-end" alignSelf="flex-start" style={{ flexGrow: 3 }} sm={{ margin: 'auto' }}>
            <RouterLink to="/home" style={{ textDecoration: 'none', color: 'black', fontFamily: "'Zilla Slab', Arial, sans-serif", paddingLeft: '10px', marginTop: '-15px' }}>
              <img src={FullLogo_Transparent} alt="Home" style={{ width: '135px', height: '135px' }} sm={{ margin: 'auto' }} />
            </RouterLink>
        </Box>

        <Box display="flex" justifyContent="flex-start" style={{ padding: '20px' }} sm={{ margin: 'auto' }}>
      <RouterLink to="/patientstories" style={{ textDecoration: 'none', color: 'black', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif", fontSize: '18px', fontWeight: 'italic', transition: 'color 0.3s ease', '&:hover': { color: '#000000' }, borderRight: '1px solid black', paddingRight: '10px' }} sm={{ margin: 'auto' }}>Stories By Group</RouterLink>
    </Box>

        <div className="top-nav-bar__login-register" style={{ paddingRight: '10px' }} sm={{ margin: 'auto' }}>
          {user ? (
            <>
              <span className="top-nav-bar__login-message" style={{ fontFamily: 'Zilla Slab'}} sm={{ margin: 'auto' }} >Hello, {user.first_name}!</span>
              {user.orgId ? (
                <>
                <RouterLink to={`/organizations/${orgId}/profile`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'black', padding: '20px', fontFamily: "'Zilla Slab', Arial, sans-serif" }} sm={{ margin: 'auto' }}>View Profile</RouterLink>
                <RouterLink to={`/organizations/${orgId}/patients`} className="top-nav-bar__patients" style={{ textDecoration: 'none', color: 'black', padding: '20px', marginRight: '20px', fontFamily: "'Zilla Slab', Arial, sans-serif" }} sm={{ margin: 'auto' }}>Patient List</RouterLink>
                </>
              ) : (
                <RouterLink to={`/users/${user.userId}`} className="top-nav-bar__profile" style={{ textDecoration: 'none', color: 'black', padding: '20px', fontFamily: "'Zilla Slab', Arial, sans-serif" }} sm={{ margin: 'auto' }}>View Profile</RouterLink>
              )}
              <Button
                onClick={logout}
                className="top-nav-bar__logout"
                variant="contained"
                color="secondary"
                style={{ fontFamily: "'Zilla Slab', Arial, sans-serif", height: '30px', fontSize: '12px', padding: '5px' }} sm={{ margin: 'auto' }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <RouterLink to="/login" className="top-nav-bar__login" style={{ textDecoration: 'none', color: 'black', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif" }} sm={{ margin: 'auto' }}>Login</RouterLink>
              <RouterLink to="/register" className="top-nav-bar__register" style={{ textDecoration: 'none', color: 'black', padding: '5px', fontFamily: "'Zilla Slab', Arial, sans-serif" }} sm={{ margin: 'auto' }}>Register</RouterLink>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;