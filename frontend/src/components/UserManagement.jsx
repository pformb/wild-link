import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { makeStyles } from '@mui/styles';
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
  const navigate = useNavigate();
  const { userId } = useParams();
  const token = localStorage.getItem("token");

  const [userData, setUserData] = useState({
    //maybe send send this as the 1st object of the array in the fetch request
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    address: "",
    phone_number: "",
  });

  const [passUpdate, setPassUpdate] = useState({
    password: "",
    confirm_password: "",
  })

  const [donation, setDonation] = useState([]);

  useEffect(() => {
    if (!token) {
      //if no token exists redirect home
      navigate("/home", { replace: true });
      return;
    }
    if (user.role !== "users") {
      //if token exists but role is not users redirect home
      navigate("/home", { replace: true });
      return;
    }
    if (user.userId && userId !== user.userId) {
      // If they don't match, redirect to the correct user profile path
      navigate(`/users/${user.userId}/`);
    }

    const fetchUserProfile = async () => {
      try {
        const response = await fetch(`/api/users/${user.userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.length > 0) {
          setUserData(data[0]); // Access the first object in the array
        } else {
          console.error("No user data returned from API");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };
    fetchUserProfile();

    //fetch donations table
    fetch(`/api/users/${user.userId}/donations`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      // .then(data => setDonation(data))
      .then((data) => {
        setDonation(data);
      })
      .catch((error) => console.error("Error fetching donation:", error));
  }, [token, user, userId, navigate]);

  const onHandleSubmit = (event) => {
    event.preventDefault();

    //submit the form data
    fetch(`/api/users/${user.userId}`, {
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
      .catch((error) => console.error("Error updating user profile:", error));
  };

  //change password
  const handlePasswordChange = (event) => {
    event.preventDefault();
    //password check
    if (passUpdate.password !== passUpdate.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    delete passUpdate.confirm_password;
    //submit the form data
    fetch(`/api/users/${user.userId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
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
        console.error("Error updating user password:", error)
      );
  };

  //handle Edit user Information
  const onHandleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const onPassHandleChange = (event) => {
    setPassUpdate({
      ...passUpdate,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="UserManagement">
      <div className="user-mgmt">
        <div className="user-mgmt__content">
          <Box
            display="flex"
            justifyContent="center"
            sx={{ border: "1px solid #000", m: 2, p: 2 }}
          >
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <form onSubmit={onHandleSubmit}>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="first_name"
                      label="First Name"
                      value={userData.first_name || ""}
                      onChange={onHandleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="last_name"
                      label="Last Name"
                      value={userData.last_name || ""}
                      onChange={onHandleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="email"
                      label="Email"
                      value={userData.email || ""}
                      onChange={onHandleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="address"
                      label="Address"
                      value={userData.address || ""}
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
                </form>
              </Grid>
              <Grid item xs={6}>
                <form onSubmit={handlePasswordChange}>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="password"
                      label="New Password"
                      value={passUpdate.password || ""}
                      onChange={onPassHandleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: 2 }}>
                    <TextField
                      name="confirm_password"
                      label="Confirm New Password"
                      value={passUpdate.confirm_password || ""}
                      onChange={onPassHandleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ p: 2 }}>
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
          <Box p={2} sx={{ border: "1px solid #000", m: 2, p: 2 }}>
            {donation ? (
              <DonationsTable
                donation={donation}
                userId={userId}
                isOrg={false}
              />
            ) : (
              <CircularProgress />
            )}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
