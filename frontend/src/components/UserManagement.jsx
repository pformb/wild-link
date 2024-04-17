import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import DonationsTable from './DonationsTable';

const UserManagement = () => {
  const { userId } = useParams();
  console.log(`UserManagement component rendered. userId: ${userId}`);
  //Org specific states
  // const [user_name, setOrgName] = useState('');
  console.log('UserManagement:', userId);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [userData, setUserData] = useState([]); //unsure yet if this is needed
  const [donation, setDonation] = useState([]);

    //fetch donations table
    useEffect(() => {
      fetch(`/organizations/${userId}/donations`)
        .then(response => response.json())
        .then(data => setDonation(data))
        .catch(error => console.error('Error fetching donation:', error));
    }, [userId]);

  //handle Edit user Information
  //need to do some reseach on this
  const onHandleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    const userData = {
      first_name: data.get('first_name'),
      last_name: data.get('last_name'),
      email: data.get('email'),
      address: data.get('address'),
      phone_number: data.get('phone_number'),
      image: data.get('image'),
      password: data.get('password'),
      confirm_password: data.get('confirm_password')
    };
    console.log(`userId: ${userId}`);
    fetch(`/api/users/${userId}/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userData }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        setUserData(data);
      });
    };

return (
  <div className="UserManagement">
    <div className="user-mgmt">
      <div className="user-mgmt__content">
        <Box display="flex" justifyContent="center">
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <form onSubmit={onHandleSubmit}>
                <Grid item xs={6}>
                  First Name:
                  <TextField
                    type="text"
                    name="first_name"
                    value={first_name} onChange={e => setFirstName(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Last Name:
                  <TextField
                    type="text"
                    name="last_name"
                    value={last_name} onChange={e => setLastName(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Email:
                  <TextField
                    type="email"
                    name="email"
                    value={email} onChange={e => setEmail(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Address:
                  <TextField
                    type="text"
                    name="address"
                    value={address} onChange={e => setAddress(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Phone:
                  <TextField
                    type="text"
                    name="phone"
                    value={phone_number} onChange={e => setPhoneNumber(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Image:
                  <TextField
                    type="text"
                    name="image"
                    value={image}
                    onChange={e => setImage(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Password:
                  <TextField
                    type="text"
                    name="password"
                    value={password} onChange={e => setPassword(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  Confirm Password:
                  <TextField
                    type="text"
                    name="confirm_password"
                    value={confirm_password}
                    onChange={e => setConfirmPassword(e.target.value)} />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Edit
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={6}>
              {donation ? (
                <DonationsTable donation={donation} />
              ) : (
                <CircularProgress />
              )}
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  </div>
);
};

export default UserManagement;