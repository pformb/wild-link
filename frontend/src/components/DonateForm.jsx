import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';

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

  return (
    <Box sx={{ width: "80%", mx: "auto", boxShadow: 3, p: 3, mt: 10 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <p><strong>Case Number:</strong> xxxx</p>
          <p><strong>Species:</strong> xxxx</p>
        </Grid>

        <Grid item xs={12} sm={6}>
        <FormControl fullWidth variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Amount</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Donation Amount"
            variant="outlined"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ textAlign: 'right' }}>
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
          <Box sx={{ textAlign: 'right' }}>
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
          <Box sx={{ textAlign: 'right' }}>
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
          <Button variant="contained" color="primary" onClick={handleDonation} fullWidth>
            Confirm Donation
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DonationForm;
