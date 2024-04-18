
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TopNavigation = ({loggedIn, logout, name}) => {
  const navigate = useNavigate();
  console.log('TopNavigation:', loggedIn, name);

  // const handleLogout = () => {

  //   navigate('/home');
  // };

  console.log('checking if user is logged in:', {loggedIn, userType, usersId, orgId});
  if (loggedIn && userType === 'user') {
    console.log(`Creating link to user profile. usersId: ${usersId}`);
  }
  
  return (
    <AppBar position="static" style={{ backgroundColor: '#333333', boxShadow: '0 4px 6px -6px #222', height: '72px' }}>
       <Toolbar style={{ padding: 0 }}>
        <Typography variant="h6" style={{ flexGrow: 3, fontFamily: "'Luckiest Guy', cursive", fontSize: '38px' }}>
        <RouterLink to="/home" style={{ textDecoration: 'none', color: 'white' }}>Wild Link</RouterLink>
        </Typography>

        <div className="top-nav-bar__login-register">
        {loggedIn ? (
          <>
            <span className="top-nav-bar__login-message">Hello, {name}!</span>
            <button onClick={logout} className="top-nav-bar__logout">Logout</button>
          </>
        ) : (
          <>
             <RouterLink to="/login" className="top-nav-bar__login">Login</RouterLink>
            <RouterLink to="/register" className="top-nav-bar__register">Register</RouterLink>
          </>
        )}
      </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopNavigation;

//remove orgId === null from line 47

/*          {loggedIn ? (
            <Box>
              <Typography variant="h6">{email}</Typography>
              {orgId && userType !== 'user' ? (
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
          */



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