

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

const LoginPage = ({ setLoggedIn, setUserType, orgId, setOrgId }) => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        console.log('Response not OK:', response);
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      console.log('Received:', data);
      if (data.success) {
        setLoggedIn(true);
        setUserType(data.userType);
        if (data.userType === 'organization') {
          setOrgId(data.orgId);
        }
        alert(`Welcome back, ${data.first_name}!`);
        navigate('/home');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid email or password');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;


// import React, { useState } from 'react';
// import  '../styles/LoginPage.scss';
// import { useNavigate } from 'react-router-dom';

// const LoginPage = ({ setLoggedIn, setUserType, orgId, setOrgId }) => {
  
// //redirect url
// const navigate = useNavigate();

//   //manage user data in state
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   //form submission
//   const handleSubmit =  async(e) => {
//     e.preventDefault();
  
//     const loginData = {email, password};
  
//     try {
//       const response = await fetch('http://localhost:3001/api/login', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//       });
  
//       if (!response.ok) {
//         console.log('Response not OK:', response);
//         throw new Error('Invalid email or password');
//       }
  
// // Check if the response is JSON
// const contentType = response.headers.get('content-type');
// if (contentType && contentType.indexOf('application/json') !== -1) {
//   const data = await response.json();
//   console.log('Received:', data);
//   if (data.success) {
//     // Login successful
//     setLoggedIn(true);
//     setUserType(data.userType);
//       if (data.userType === 'organization') {
//         setOrgId(data.orgId); // Set orgId here
//       }
//     alert(`Welcome back, ${data.first_name}!`);
//     navigate('/home');
//   } else {
//     // Login failed
//     alert(data.message);
//   }
// } else {
//   const data = await response.text();
//   console.log('Received:', data);
//   alert(data);
//   navigate('/home');
// }
// } catch (error) {
// console.error('Error:', error);
// alert('Invalid email or password');
// }
// };
//   return (
//     <div className="login-page">
//         <div className="login-page__content">
//           <h1>Please Login Here to Continue</h1>
//           </div>
//            <div className="login-form">
//               <form onSubmit={handleSubmit}>
//                 <input 
//                 type="text"
//                 placeholder="Email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 id="email"
//                 name="email"
//                   />
//                 <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)} 
//                 id="password"
//                 name="password"
//                 />
//                 <button type="submit">Login</button>
//             </form>
//           </div>
//     </div>
//   );
// }

// export default LoginPage;