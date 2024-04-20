import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import DonationsTable from './DonationsTable';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";

const OrgManagement = () => {
  const { user } = useAuth();
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const [donation, setDonation] = useState([]);
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
        const response = await fetch(`/api/organizations/${orgId}/profile`, { headers: { 'Authorization': `Bearer ${token}` }});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Fetched organization data:', data);
        setOrgData(data[0]); //maybe send send this as the 1st object of the array in the fetch request?
      } catch (error) {
        console.error('Error fetching organization profile:', error);
      }
    };
    fetchOrgProfile();
  }, [orgId, token]);

  //fetch donations table
  useEffect(() => {
    console.log("Org donations orgId", orgId)
    fetch(`/api/organizations/${orgId}/donations`, { headers: { 'Authorization': `Bearer ${token}` }})
      .then(response => response.json())
      .then(data => setDonation(data))
      .catch(error => console.error('Error fetching donation:', error));
  }, [orgId, token]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
  //password check
  if (orgData.password !== orgData.confirm_password) {
    alert('Passwords do not match');
    return;
  }
    console.log('Submitting form with data:', orgData);

    delete orgData.confirm_password;
    //submit the form data
    fetch(`/api/organizations/${orgId}/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(orgData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setOrgData(data))
      .catch((error) =>
        console.error("Error updating organization profile:", error)
      );
  };

  //handle Edit Organization Information
  const onHandleChange = (event) => {
    setOrgData({
      ...orgData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="OrgManagement">
      <h1 display="flex" justify-content="center">Organization Admin Dashboard</h1>
      <div className="org-mgmt">
        <div className="org-mgmt__content">
          <Box display="flex" justifyContent="center">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <form onSubmit={onHandleSubmit}>
                  <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  name="organization_name"
                  label="Organization Name"
                  value={orgData.organization_name || ''}
                  onChange={onHandleChange}
                  fullWidth
                />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="first_name"
                label="First Name"
                value={orgData.first_name || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="last_name"
                label="Last Name"
                value={orgData.last_name || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="email"
                label="email"
                value={orgData.email || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="address"
                label="address"
                value={orgData.address || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="phone"
                label="phone"
                value={orgData.phone_number || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="password"
                label="password"
                value={orgData.password || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="confirm_password"
                label="confrim password"
                value={orgData.confirm_password || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
                    <Box display="flex" justifyContent="center" mt={2}>
                      <Button type="submit" variant="contained" color="primary">
                        Edit
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={6}>
              {donation ? (
                <DonationsTable donation={donation} orgId={orgId} isOrg={true} />
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

export default OrgManagement;