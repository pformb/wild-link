

import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DonationsTable = ({ donation }) => {
  const [orgData, setOrgData] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken; // Get the user's ID from the decoded token
  const { orgId } = decodedToken; // Get the organization's ID from the decoded token

  //check if org or user 
  useEffect(() => {
    let url; 
    if (orgId) {
      url = `/api/organizations/${orgId}/donations`;
    } else {
      url = `/api/users/${userId}/donations`;
    }

    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setOrgData(data))
      .catch(error => console.error('Error:', error));
  }, [token, orgId]);

  console.log(orgData);

//nothing found 
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
        {orgId ? (
          <>
          <TableRow>
            <TableCell>Organization Name</TableCell>
            <TableCell>{orgData.organization_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Website URL</TableCell>
            <TableCell>{orgData.website_url}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>{orgData.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>{orgData.last_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{orgData.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{orgData.phone_number}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>{orgData.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell><img src={orgData.image} alt="Organization" /></TableCell>
          </TableRow>
          </>
          ) : (
            <>
             <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell>{orgData.first_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Last Name</TableCell>
            <TableCell>{orgData.last_name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Email</TableCell>
            <TableCell>{orgData.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Phone Number</TableCell>
            <TableCell>{orgData.phone_number}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>{orgData.address}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell><img src={orgData.image} alt="User" /></TableCell>
          </TableRow>
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DonationsTable;