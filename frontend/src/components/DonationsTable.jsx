

import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DonationsTable = ({ donation }) => {
  const [orgData, setOrgData] = useState([]);
  const [userData, setUserData] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken; // Get the user's ID from the decoded token
  const { orgId } = decodedToken; // Get the organization's ID from the decoded token

  useEffect(() => {
    const url = orgId ? `/api/organizations/${orgId}/donations` : `/api/users/${userId}/donations`;
  
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => orgId ? setOrgData(data) : setUserData(data))
      .catch(error => console.error('Error:', error));
  }, [token, orgId, userId]);

  return (
   <Container align="center">
    <TableContainer component={Paper} sx={{ width: '80vw', maxWidth: '100%' }}>
      <Table>
      <TableBody>
        {orgId ? (
          <>
            <TableRow>
              <TableCell>Organization Name</TableCell>
              <TableCell>{orgData.organization_name}</TableCell>
            </TableRow>
            {/* Add more rows to display other details of the organization */}
            {orgData.map((donation, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>Organization Name</TableCell>
                  <TableCell>{donation.organization_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Website URL</TableCell>
                  <TableCell>{donation.website_url}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>{donation.first_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Last Name</TableCell>
                  <TableCell>{donation.last_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{donation.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>{donation.phone_number}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>{donation.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell><img src={donation.image} alt="Organization" /></TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </>
        ) : (
          <>
            {userData.map((donation, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell>{donation.first_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Last Name</TableCell>
                  <TableCell>{donation.last_name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{donation.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Phone Number</TableCell>
                  <TableCell>{donation.phone_number}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Address</TableCell>
                  <TableCell>{donation.address}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell><img src={donation.image} alt="User" /></TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </>
        )}
      </TableBody>
    </Table>
    </TableContainer >
    </Container>
  );
};

export default DonationsTable;

/*
Original before changing queries


  // //check if org or user 
  // useEffect(() => {
  //   let url;
  //   if (orgId) {
  //     url = `/api/organizations/${orgId}/donations`;
  //   } else {
  //     url = `/api/users/${userId}/donations`;
  //   }

  //   fetch(url, {
  //     headers: {
  //       'Authorization': `Bearer ${token}`
  //     }
  //   })
  //     .then(response => response.json())
  //     .then(data => setOrgData(data))
  //     .catch(error => console.error('Error:', error));
  // }, [token, orgId, userId]);
  
  // console.log(orgData);

  //nothing found 
  // if (!data) {
  //   return <div>Loading...</div>;
  // }

*<TableContainer component={Paper}>
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
    </TableContainer> */