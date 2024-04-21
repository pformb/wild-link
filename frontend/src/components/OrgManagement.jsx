import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import DonationsTable from './DonationsTable';
import { useAuth } from "../contexts/AuthContext";

const OrgManagement = () => {
  const { orgId } = useParams();
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const navigate = useNavigate();
  const [donation, setDonation] = useState([]);


  const [orgData, setOrgData] = useState({ //maybe send send this as the 1st object of the array in the fetch request
    organization_name: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone_number: '',
  });

  const [passUpdate, setPassUpdate] = useState({
    password: "",
    confirm_password: "",
  })

  useEffect(() => {
    if (!token) {
      //if no token exists redirect home
      console.log("no token")
      navigate("/home", { replace: true });
      return;
    }
    if (user.role !== "organizations") {
      //if token exists but role is not users redirect home
      console.log("not an org")
      navigate("/home", { replace: true });
      return;
    }
    if (user.orgId && Number(orgId) !== Number(user.orgId)) {
      // If they don't match, redirect to the correct user profile path
      console.log("user.orgId is:", user.orgId, "Type:", typeof user.orgId);
      console.log("orgId is:", orgId, "Type:", typeof orgId);
      console.log("does not match ids")
      navigate(`/users/${user.orgId}/`);
    }

    const fetchOrgProfile = async () => {
      try {
        const response = await fetch(`/api/organizations/${user.orgId}/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched organization data:", data);
        setOrgData(data[0]); //maybe send send this as the 1st object of the array in the fetch request?
      } catch (error) {
        console.error("Error fetching organization profile:", error);
      }
    };
    fetchOrgProfile();

    //fetch donations table
    fetch(`/api/organizations/${user.orgId}/donations`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then((data) => setDonation(data))
      .catch((error) => console.error("Error fetching donation:", error));
  }, [user, token]);

  //edit the organization profile
  const onHandleSubmit = (event) => {
    event.preventDefault();
  
    // Send the PATCH request
    fetch(`/api/organizations/${user.orgId}/profile`, {
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
      .then(() => {
        alert('Organization information updated successfully');
      })
      .catch((error) =>
        console.error("Error updating organization information:", error)
      );
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    //password check
    if (passUpdate.password !== passUpdate.confirm_password) {
      alert('Passwords do not match');
      return;
    }

    delete passUpdate.confirm_password;
    //submit the form data
    fetch(`/api/organizations/${user.orgId}/profile`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(passUpdate),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(() => setPassUpdate({ password: "", confirm_password: "" }))
      .catch((error) =>
        console.error("Error updating organization Password:", error)
      );
  };

  //handle Edit Organization Information
  const onHandleChange = (event) => {
    setOrgData({
      ...orgData,
      [event.target.name]: event.target.value
    });
  };

  const onPassHandleChange = (event) => {
    setPassUpdate({
      ...passUpdate,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="OrgManagement">
      <div className="org-mgmt">
        <div className="org-mgmt__content">
          <Box display="flex" justifyContent="center" bgcolor="cream" sx={{ border: '1px solid #000', m: 2, p: 2 }}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <form onSubmit={onHandleSubmit}>
                <Grid item xs={6} sx={{ p: 2 }}>
                <TextField
                  name="organization_name"
                  label="Organization Name"
                  value={orgData.organization_name || ''}
                  onChange={onHandleChange}
                  fullWidth
                />
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <TextField
                name="first_name"
                label="First Name"
                value={orgData.first_name || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <TextField
                name="last_name"
                label="Last Name"
                value={orgData.last_name || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <TextField
                name="email"
                label="email"
                value={orgData.email || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <TextField
                name="address"
                label="address"
                value={orgData.address || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={6} sx={{ p: 2 }}>
              <TextField
                name="phone"
                label="phone"
                value={orgData.phone_number || ''}
                onChange={onHandleChange}
                fullWidth
              />
            </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Save
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={6}>
              <form onSubmit={handlePasswordChange}>
                <Grid item xs={6} sx={{ p: 2 }}>
                  <TextField
                    name="password"
                    label="New Password"
                    value={passUpdate.password || ''}
                    onChange={onPassHandleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ p: 2 }}>
                  <TextField
                    name="confirm_password"
                    label="Confirm New Password"
                    value={passUpdate.confirm_password || ''}
                    onChange={onPassHandleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <Box display="flex" justifyContent="center" mt={2}>
                    <Button type="submit" variant="contained" color="primary">
                      Save
                    </Button>
                  </Box>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Box>
        <Box p={2} sx={{ border: '1px solid #000', m: 2, p: 2 }}>
        {donation ? (
          <DonationsTable donation={donation} orgId={orgId} isOrg={true} />
        ) : (
          <CircularProgress />
        )}
        </Box>
        </div>
      </div>
    </div>
  );
};

export default OrgManagement;