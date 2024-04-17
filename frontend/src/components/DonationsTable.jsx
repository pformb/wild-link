import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
//hooks

const DonationsTable = ({ isLoggedIn, usersId, orgId, donation, userType }) => {
  const [donations, setDonations] = useState([]);
  console.log(`DonationsTable component rendered. usersId: ${usersId}, orgId: ${orgId}, userType: ${userType}`);

  useEffect(() => {
    if (isLoggedIn) {
      console.log('Fetching donations urls...');
      const url = userType === 'user'
        ? `/users/${usersId}/donations`
        : `/organizations/${orgId}/donations`;

        console.log('Fetching from URL:', url);

      fetch(url)
        .then(response => {if (!response.ok) {
          console.log('Response:', response);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
          return response.json();
      })
        .then(data => setDonations(data))
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
          {donations.map((donation, index) => (
            <React.Fragment key={index}>
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
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonationsTable;