

import * as React from 'react';
import { useState } from 'react';
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
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";

const defaultTheme = createTheme();

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open, setOpen] = useState(false);
  const { setAuthData } = useAuth();


  const handleSubmit = async (e) => { 
    e.preventDefault();
    const loginData = {
      email,
      password
    };
  
    try {
      console.log("login data is:", loginData)
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
        credentials: 'include'
      });
  
      const data = await response.json();
  
      if (response.ok && data.success) {
        // Login successful
        alert(`Welcome back, ${data.first_name}!`);
        localStorage.setItem("token", data.token); // Save the token in localStorage
        setAuthData(data.token);
  
        //decoding the token
        const decodedToken = jwtDecode(data.token);
        console.log('Decoded',decodedToken);
  
        //accessing userID, role, first_name from the token
        console.log('User ID:', decodedToken.userId);
        console.log('Role:', decodedToken.role);
        console.log('First name:', decodedToken.first_name);
  
        navigate('/home');
      } else {
        // Login failed
        throw new Error(data.message || 'Invalid email or password');
      }
    } catch (error) {
      console.error('Error:', error);
      setOpen(true);
    }
  };

  // const handleSubmit = async (e) => { 
  //   e.preventDefault();
  //   const loginData = {
  //     email,
  //     password
  // };

  //   try {
  //     console.log("login data is:", loginData)
  //     const response = await fetch('http://localhost:3001/api/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(loginData),
  //       credentials: 'include'
  //     });

  //     if (!response.ok) {
  //       throw new Error('Invalid email or password');
  //     }

  //     const data = await response.json();
  //     console.log('Received:', data);
  //     if (data.success) {
  //       // Login successful
  //       alert(`Welcome back, ${data.first_name}!`);
  //       localStorage.setItem("token", data.token); // Save the token in localStorage for other pages
  //       setAuthData(data.token);

  //       //decoding the token
  //       const decodedToken = jwtDecode(data.token);
  //       console.log('Decoded',decodedToken);

  //       //accessing userID, role, first_name from the token
  //       console.log('User ID:', decodedToken.userId);
  //       console.log('Role:', decodedToken.role);
  //       console.log('First name:', decodedToken.first_name);

  //       navigate('/home');
  //     } else {
  //       // Login failed
  //       setOpen(true);
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //     setOpen(true);
  //   }
  // };

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
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
        <Alert onClose={() => setOpen(false)} severity="error" sx={{ width: '100%' }}>
          Invalid email or password. Please try again.
        </Alert>
    </Snackbar>
      </Container>
    </ThemeProvider>
  );
}

export default LoginPage;
// Check if the response is JSON
// const contentType = response.headers.get('content-type');
// if (contentType && contentType.indexOf('application/json') !== -1) {
//   const data = await response.json();
//   console.log('Received:', data);
//   if (data.success) {
//     // Login successful
//     setLoggedIn(true);
//     alert(`Welcome back, ${data.first_name}!`);
//       localStorage.setItem("token", data.token); // Save the token in localStorage
//       setAuthData(data.token);
//     navigate('/home');
//   } else {
//     // Login failed
//     alert(data.message);
//   }
// } else {
//   const data = await response.text();
//   alert(data);
//   navigate('/home');
// }
// } catch (error) {
// console.error('Error:', error);
// alert('Invalid email or password');
// }
// };

//{ setLoggedIn, setUserType, orgId, setOrgId, setUsersId }