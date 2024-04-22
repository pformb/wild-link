import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import DonationsTable from './DonationsTable';
import { useAuth } from "../contexts/AuthContext";
import { useNotification } from "../contexts/NotificationContext";

const OrgManagement = () => {
  const { orgId } = useParams();
  const token = localStorage.getItem("token");
  const { user } = useAuth();
  const { notify } = useNotification();
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

  const [showPassword, setShowPassword] = React.useState(false);

const handleClickShowPassword = () => {
  setShowPassword(!showPassword);
};

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
        notify({
          msg: "Organization information updated successfully",
          type: "success",
        });
      })
      .catch((error) =>
        console.error("Error updating organization information:", error)
      );
  };

  const handlePasswordChange = (event) => {
    event.preventDefault();
    //password check
    if (passUpdate.password !== passUpdate.confirm_password) {
      notify({
        msg: "Passwords do not match",
        type: "error",
      });
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
          <Box display="flex" justifyContent="center">
            <Grid container spacing={3}>
              <Grid item xs={6}>

              <form onSubmit={onHandleSubmit}>
  <Grid container spacing={2} sx={{ p: 2 }}>
    <Grid item xs={6} sx={{ p: 2}}>
      <TextField
        sx={{ p: 2 }}
        name="organization_name"
        label="Organization Name"
        value={orgData.organization_name || ''}
        onChange={onHandleChange}
        fullWidth
      />
      <TextField
        sx={{ p:2}}
        name="first_name"
        label="First Name"
        value={orgData.first_name || ''}
        onChange={onHandleChange}
        fullWidth
      />
      <TextField
        sx={{ p: 2 }}
        name="email"
        label="Email"
        value={orgData.email || ''}
        onChange={onHandleChange}
        fullWidth
      />
    </Grid>
    <Grid item xs={6} sx={{ p: 2, backgroundColor: 'white' }}>
      <TextField
        sx={{ p: 2 }}
        name="last_name"
        label="Last Name"
        value={orgData.last_name || ''}
        onChange={onHandleChange}
        fullWidth
      />
      <TextField
        sx={{ p: 2 }}
        name="address"
        label="Address"
        value={orgData.address || ''}
        onChange={onHandleChange}
        fullWidth
      />
      <TextField
        sx={{ p: 2 }}
        name="phone"
        label="Phone"
        value={orgData.phone_number || ''}
        onChange={onHandleChange}
        fullWidth
      />
    </Grid>
  </Grid>
  <Box display="flex" justifyContent="center" mt={2}>
    <Button type="submit" variant="contained" color="primary">
      Save
    </Button>
  </Box>
</form>

            </Grid>
            <Grid item xs={6}>
              <form onSubmit={handlePasswordChange}>
                <Grid item xs={6} sx={{ p: 4 }}>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    label="New Password"
                    value={passUpdate.password || ''}
                    onChange={onPassHandleChange}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={(event) => event.preventDefault()}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={6} sx={{ p: 2 }}>
                  <TextField
                    type={showPassword ? 'text' : 'password'}
                    name="confirm_password"
                    label="Confirm New Password"
                    value={passUpdate.confirm_password || ''}
                    onChange={onPassHandleChange}
                    fullWidth
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={(event) => event.preventDefault()}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
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
        <Grid item xs={6} p={2}>
              {donation ? (
                <DonationsTable donation={donation} orgId={orgId} isOrg={true} />
              ) : (
                <CircularProgress />
              )}
            </Grid>
        </div>
      </div>
    </div>
  );
};

export default OrgManagement;