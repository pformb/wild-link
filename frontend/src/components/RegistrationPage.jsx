

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

const RegistrationPage = ({setLoggedIn}) => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = React.useState('');
  const [last_name, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      first_name,
      last_name,
      email,
      address,
      password,
    };

    fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        console.log('Response not OK:', response);
        throw new Error('Registration failed');
      }
      return response.json();
    })
    .then(data => {
      if (data.message === 'User Created') {
        console.log('Registration successful', data);
        setLoggedIn(true);
        navigate('/home');
      } else {
        alert(data.message);
      }
    })
    .catch(error => {
      console.error('Registration Error:', error);
    });
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
            Register
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={first_name}
                  onChange={e => setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={last_name}
                  onChange={e => setLastName(e.target.value)}
                />
              </Grid>
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
                  autoComplete="new-password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegistrationPage;

// import React, { useState } from 'react';
// import  '../styles/RegistrationPage.scss';
// import { useNavigate } from 'react-router-dom';

// const RegistrationPage = ({setLoggedIn}) => {
//   //redirect url
//   const navigate = useNavigate();

//   //manage user data in state
//   const [first_name, setFirstName] = useState('');
//   const [last_name, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const userData = {
//       first_name,
//       last_name,
//       email,
//       address,
//       password,
//     };

//     fetch('http://localhost:3001/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(userData),
//     })
//     .then(response => {
//       if (!response.ok) {
//         console.log('Response not OK:', response);
//         throw new Error('Registration failed');
//       }
//       return response.json();
//   })
//   .then(data => {
//     if (data.message === 'User Created') {
//       console.log('Registration successful', data);
//       setLoggedIn(true);
//       navigate('/home');
//     } else {
//       alert(data.message);
//     }
//   })
//   .catch(error => {
//     console.error('Registration Error:', error);
//   });
// };

//   return (
//     <div className="registration-page">
//      <div className="registration-page__content">
//       <h1>Please Register Here to Continue</h1>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="First Name" value={first_name} onChange={e => setFirstName(e.target.value)}/>
//         <input type="text" placeholder="Last Name" value={last_name} onChange={e => setLastName(e.target.value)}/>
//         <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
//         <input type="text" placeholder="Address" value={address} onChange={e=> setAddress(e.target.value)} />
//         <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
//         <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   </div>
//   );
// }

// export default RegistrationPage;