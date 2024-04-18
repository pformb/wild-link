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

const DonationForm = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCardNumber, setCreditCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleDonation = () => {
    // Implement donation handling logic here
    console.log(`Donation Amount: ${donationAmount}`);
    console.log(`Full Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Credit Card Number: ${creditCardNumber}`);
    console.log(`Expiration Date: ${expirationDate}`);
    console.log(`CVV: ${cvv}`);
    // Reset form fields after submission
    setDonationAmount('');
    setFullName('');
    setEmail('');
    setCreditCardNumber('');
    setExpirationDate('');
    setCVV('');
  };

  const amountButton = (event) => {
    const {value} = event.target;
    setDonationAmount(value);
  }


  return (
    <Box sx={{ width: "80%", mx: "auto", boxShadow: 3, p: 3, mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box sx={{ width: "100%", maxWidth: 360 }}>
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
          <Box sx={{ pl: 3, width: "100%" }}>
            <Typography variant="h6" gutterBottom align="left" sx={{ mb: 2 }}>
              <strong>Case Number:</strong> xxxx
            </Typography>
            <Typography variant="h6" align="left" sx={{ mb: 2 }}>
              <strong>Species:</strong> xxxx
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth variant="filled">
            <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
            <FilledInput
              id="filled-adornment-amount"
              startAdornment={
                <InputAdornment position="start">$</InputAdornment>
              }
              label="Donation Amount"
              variant="outlined"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="Credit Card Number"
              variant="outlined"
              value={creditCardNumber}
              onChange={(e) => setCreditCardNumber(e.target.value)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Full Name"
            variant="outlined"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="Expiration Date MM/YY"
              variant="outlined"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              fullWidth
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: "right" }}>
            <TextField
              label="CVV"
              variant="outlined"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
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
