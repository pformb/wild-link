//Try 2 

// import React, { useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { TextField, Button, Grid, Paper } from '@material-ui/core';
// // import '../styles/OrgManagement.scss';
// import DonationsCard from './DonationsCard';

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DonationsCard from './DonationsCard';

const OrgManagement = () => {
  // const navigate = useNavigate();
  const { orgId } = useParams();
  console.log('orgId:', orgId);
  const [orgData, setOrgData] = useState({ //maybe send send this as the 1st object of the array in the fetch request
    organization_name: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  });

  console.log('orgData:', orgData);

  useEffect(() => {
    const fetchOrgProfile = async () => {
      try {
        const response = await fetch(`/api/organizations/${orgId}/profile`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('data:', data);
        setOrgData(data);
      } catch (error) {
        console.error('Error fetching organization profile:', error);
      }
    };
    fetchOrgProfile();
    // console.log('orgData:', orgData);
  }, [orgId]);

  useEffect(() => {
    const fetchSession = async () => {
      const response = await fetch('/api/session');
      console.log('response:', response);
      if (response.ok) {
        const data = await response.json();
        // Now you have access to the userId
        const userId = data.userId;
      } else {
        console.error('Not logged in');
      }
    }
    fetchSession();
  }, []);


  const onHandleSubmit = (event) => {
    event.preventDefault();
  
    console.log('Submitting form with data:', orgData);
    //submit the form data
    fetch(`/api/organizations/${orgId}/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orgData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setOrgData(data[0]))
    .catch(error => console.error('Error updating organization profile:', error));
  };

  //handle Edit Organization Information
  const onHandleChange = (event) => {
    // setOrgData({
    //   ...orgData,
    //   [event.target.name]: event.target.value
    // });
  };

  return (
    <div className="OrgManagement">
      <h1>Organization Admin Dashboard</h1>
      <div className="org-mgmt">
        <div className="org-mgmt__content">
        <Box width="50vw" display="flex" justifyContent="center">
          <form onSubmit={onHandleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name="organization_name"
                  label="Organization Name"
                  value={orgData.organization_name}
                  onChange={onHandleChange}
                  fullWidth
                />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="first_name"
                label="First Name"
                value={orgData.first_name}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="last_name"
                label="Last Name"
                value={orgData.last_name}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="email"
                value={orgData.email}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="address"
                label="address"
                value={orgData.address}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone"
                label="phone"
                value={orgData.phone}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="password"
                label="password"
                value={orgData.password}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="confirm_password"
                label="confrim password"
                value={orgData.confirm_password}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
              <Grid item xs={6}>
              <Box display="flex" justifyContent="center" mt={2}>
  <Button type="submit" variant="contained" color="primary">
    Edit Organization Information
  </Button>
</Box>
              </Grid>
            </Grid>
          </form>
          </Box>
          <DonationsCard />
        </div>
      </div>
    </div>
  );
};

export default OrgManagement;