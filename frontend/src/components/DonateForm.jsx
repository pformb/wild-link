import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from "@mui/material/Typography";
import { useLocation, Navigate } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext";

const DonationForm = () => {

  const location = useLocation();
  const { user } = useAuth();
  const { patient, orgId } = location.state;

  const [formData, setFormData] = useState({
    donationAmount: "",
    fullName: "",
    email: "",
    creditCardNumber: "",
    expirationDate: "",
    cvv: "",
  });
  if (!location.state) {
    return <Navigate to="/home" replace />;
  }

  console.log(`org id on donation form:`, orgId);
  console.log(`patient data on donation form`, patient);


const handleDonation = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    const amountInCents = Math.round(Number(formData.donationAmount) * 100);
    const donationData = {
      donation: {
        organizationId: orgId,
        patientId: patient.id,
        donationInCents: amountInCents,
      },
    };
    try {
      const response = await fetch(`/api/users/${user.userId}/donations/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(donationData),
      });

      if (response.ok) {
        alert("Donation submitted successfully!");
      } else {
        throw new Error("Failed to submit donation");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit donation");
    }
  };

  const amountButton = (event) => {
    const {value} = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      donationAmount: value
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
       [name]: value,
    }));
  };


  return (
    <Box sx={{ width: "80%", mx: "auto", boxShadow: 3, p: 3, mt: 5, mb: 20 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "80%", maxWidth: 360 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="2" onClick={amountButton}>
                  $2
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="5" onClick={amountButton}>
                  $5
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="10" onClick={amountButton}>
                  $10
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="20" onClick={amountButton}>
                  $20
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="50" onClick={amountButton}>
                  $50
                </Button>
              </Grid>
              <Grid item xs={4} sx={{ mb: 2 }}>
                <Button variant="contained" value="100" onClick={amountButton}>
                  $100
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <Box sx={{ pl: 0, width: "100%"}}>
            <Typography variant="h6" gutterBottom align="left" sx={{ mb: 2 }}>
              <strong>Case Number:</strong> {patient.patient_case}
            </Typography>
            <Typography variant="h6" align="left" sx={{ mb: 2 }}>
              <strong>Species:</strong> {patient.species}
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img 
        src={patient.image} 
        alt="Patient" 
        height= '150'
        width= 'auto'
        style={{ 
          borderRadius: '20px',
          marginBottom: '20px',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)',
          marginRight: '10px'
        }} 
      />
      </Box>
            
          </Box>
        </Grid>
   
      </Grid>
      
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Custom Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Donation Amount"
              variant="outlined"
              name="donationAmount"
              value={formData.donationAmount}
              onChange={(e) => handleInputChange(e)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="Credit Card Number"
              variant="outlined"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name"
            variant="outlined"
            name="fullName"
            value={formData.fullName}
            onChange={(e) => handleInputChange(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="Expiration Date MM/YY"
              variant="outlined"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={(e) => handleInputChange(e)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={(e) => handleInputChange(e)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="CVV"
              variant="outlined"
              name="cvv"
              value={formData.cvv}
              onChange={(e) => handleInputChange(e)}
              
              fullWidth
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDonation}
            fullWidth
          >
            Confirm Donation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationForm;
