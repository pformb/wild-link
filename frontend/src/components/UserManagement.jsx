import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";
import DonationsTable from './DonationsTable';

//adjusts img size
const useStyles = makeStyles({
  image: {
    width: '100%', // Adjust as needed
    height: 'auto', // Keeps the aspect ratio
    maxWidth: '200px', // Adjust as needed
  },
});

const UserManagement = () => {
  const classes = useStyles();
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [donation, setDonation] = useState([]);
  const { userId } = useParams();
  console.log(`UserManagement component rendered. userId: ${userId}`);

  const [userData, setUserData] = useState({ //maybe send send this as the 1st object of the array in the fetch request
    user_name: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  });

  console.log('userData:', userData);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`, { headers: { 'Authorization': `Bearer ${token}` } });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched users data:', data);
        if (data.length > 0) {
          setUserData(data[0]); // Access the first object in the array
        } else {
          console.error('No user data returned from API');
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };
    fetchUserProfile();
  }, [userId, token]);

  // useEffect(() => {
  //   const fetchUserProfile = async () => {
  //     try {
  //       const response = await fetch(`/api/users/${userId}`, { headers: { 'Authorization': `Bearer ${token}` } });
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       const data = await response.json();
  //       console.log('Fetched users data:', data);
  //       setUserData(data); //maybe send send this as the 1st object of the array in the fetch request?
  //     } catch (error) {
  //       console.error('Error fetching user profile:', error);
  //     }
  //   };
  //   fetchUserProfile();
  // }, [userId, token]);

  //fetch donations table
  useEffect(() => {
    console.log("Org donations userId", userId);
    fetch(`api/users/${userId}/donations`, { headers: { 'Authorization': `Bearer ${token}` } })
      .then(response => response.json())
      // .then(data => setDonation(data))
      .then(data => {
        console.log(data);
        setDonation(data);
      })
      .catch(error => console.error('Error fetching donation:', error));
  }, [userId, token]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    //password check
    if (userData.password !== userData.confirm_password) {
      alert('Passwords do not match');
      return;
    }
    console.log('Submitting form with data:', userData);

    delete userData.confirm_password;
    //submit the form data
    fetch(`/api/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setUserData(data))
      .catch((error) =>
        console.error("Error updating user profile:", error)
      );
  };

  //handle Edit user Information
  const onHandleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };


  return (
    <div className="UserManagement">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className="user-mgmt">
            <div className="user-mgmt__content">
              <Box display="flex" justifyContent="center">
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <form onSubmit={onHandleSubmit}>
                      <Box display="flex" flexDirection="column" justifyContent="space-between">
                        <Grid item xs={12}>
                          First Name:
                          <TextField
                            type="text"
                            name="first_name"
                            value={userData.first_name || ''}
                            onChange={onHandleChange} />
                        </Grid>
                        <Grid item xs={12}>
                          Last Name:
                          <TextField
                            type="text"
                            name="last_name"
                            value={userData.last_name || ''}
                            onChange={onHandleChange} />
                        </Grid>
                        <Grid item xs={12}>
                          Email:
                          <TextField
                            type="email"
                            name="email"
                            value={userData.email || ''}
                            onChange={onHandleChange} />
                        </Grid>
                        <Grid item xs={12}>
                          Address:
                          <TextField
                            type="text"
                            name="address"
                            value={userData.address}
                            onChange={onHandleChange} />
                        </Grid>
                        <Grid item xs={12}>
                          Phone:
                          <TextField
                            type="text"
                            name="phone"
                            value={userData.phone_number}
                            onChange={onHandleChange} />
                        </Grid>
                        <Grid item xs={12}>
                          Image:
                          <TextField
                            type="text"
                            name="image"
                            value={userData.image}
                            onChange={onHandleChange}
                          />
                          {userData.image && (
                            <img src={userData.image} alt="User" className={classes.image} />
                          )}
                        </Grid>
                        <Box display="flex" justifyContent="center" mt={2}>
                          <Button type="submit" variant="contained" color="primary">
                            Save
                          </Button>
                        </Box>
                      </Box>

                      <Box display="flex" justifyContent="space-between">
        <Grid item xs={12} md={6}>
          Password:
          <TextField
            type="text"
            name="password"
            value={userData.password}
            onChange={onHandleChange} />
        </Grid>
        <Grid item xs={6}>
          Confirm Password:
          <TextField
            type="text"
            name="confirm_password"
            value={userData.confirm_password}
            onChange={onHandleChange} />
        </Grid>
      </Box>
                  
                          <Box display="flex" justifyContent="center" mt={2}>
                      <Button type="submit" variant="contained" color="primary">
                        Save
                      </Button>
                    </Box>

                  </form>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Grid>

        <Grid item xs={12}>
          {donation ? (
            <DonationsTable donation={donation} userId={userId} />
          ) : (
            <CircularProgress />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export default UserManagement;
