import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
//hooks

const DonationsTable = ({ isLoggedIn, usersId, orgId, donation, userType}) => {

  useEffect(() => {
    if (isLoggedIn) {
      const url = userType === 'user'
      ? `/users/${usersId}/donations`
      : `/organizations/${orgId}/donations`;

      fetch(url)
      .then(response => response.json())
      // .then(data => setDonations(data))
      .catch(error => console.error('Error fetching donations:', error));
    }
  }, [isLoggedIn, usersId, userType, orgId]);

  if (!donation) {
    return null;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Donation Id</TableCell>
            <TableCell>{donation.id}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Organization</TableCell>
            <TableCell>{donation.organization}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Donor</TableCell>
            <TableCell>{donation.donor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Case Number</TableCell>
            <TableCell>{donation.caseNumber}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Amount</TableCell>
            <TableCell>{donation.amount}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>{donation.date}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell><img src={donation.image} alt="Donation" /></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DonationsTable;