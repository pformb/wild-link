
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopNavigation = ({loggedIn, setLoggedIn, email, userType, orgId}) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/home');
  };

  return (
    <AppBar position="static" style={{ backgroundColor: '#333333', boxShadow: '0 4px 6px -6px #222', height: '72px' }}>
       <Toolbar style={{ padding: 0 }}>
        <Typography variant="h6" style={{ flexGrow: 3, fontFamily: "'Luckiest Guy', cursive", fontSize: '38px' }}>
          <RouterLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>Wild Link</RouterLink>
        </Typography>

        <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Button color="inherit"><RouterLink to="/patientstories" style={{ textDecoration: 'none', color: 'white' }}>Patient Stories</RouterLink></Button>
            <Button color="inherit">About Us</Button>
            <Button color="inherit"><RouterLink to="/donate" style={{ textDecoration: 'none', color: 'white' }}>Donate</RouterLink></Button>
            <Button color="inherit"><RouterLink to="/contactus" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</RouterLink></Button>
          </Box>

          {loggedIn ? (
            <Box>
              <Typography variant="h6">{email}</Typography>
              {orgId === null ? (
                <Button color="inherit"><RouterLink to="/users" style={{ textDecoration: 'none', color: 'white' }}>View Profile</RouterLink></Button>
              ) : (
                <Button color="inherit"><RouterLink to={`/organizations/${orgId}/profile`} style={{ textDecoration: 'none', color: 'white' }}>View Profile</RouterLink></Button>
              )}
              <Button color="inherit" onClick={handleLogout}>Logout</Button>
            </Box>
          ) : (
            <Box>
              <Button color="inherit"><RouterLink to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</RouterLink></Button>
              <Button color="inherit"><RouterLink to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</RouterLink></Button>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const TopNavigation = ({loggedIn, setLoggedIn, email, userType, orgId}) => {
//   const navigate = useNavigate();
//   console.log('TopNavigation:', loggedIn, email);

//   const handleLogout = () => {
//     setLoggedIn(false);
//     navigate('/home');
//   };

//   return (
//     <div className="top-nav-bar">
//       <Link to="/home" className="top-nav-bar__logo">Wild Link</Link>
      
//       <div className="top-nav-bar__links">
//         <Link to="/patientstories" className="top-nav-bar__patient-stories">Patient Stories</Link>
//         <span className="top-nav-bar__about-us">About Us</span>
//         <Link to="/donate" className="top-nav-bar__donate">Donate</Link>
//         <Link to="/contactus" className="top-nav-bar__contactus">Contact Us</Link>
//         </div>

//         <div className="top-nav-bar__login-register">

//         {loggedIn ? (
//           <>
//             <span className="top-nav-bar__login-message">{email}</span>
//             {orgId === null ? (
//                <Link to="/users" className="top-nav-bar__dashboard">View Profile</Link>
//             ) : (
//               <Link to={`/organizations/${orgId}/profile`} className="top-nav-bar__dashboard">View Profile</Link>
//             )}
//             <button onClick={handleLogout} className="top-nav-bar__logout">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login" className="top-nav-bar__login">Login</Link>
//             <Link to="/register" className="top-nav-bar__register">Register</Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TopNavigation;