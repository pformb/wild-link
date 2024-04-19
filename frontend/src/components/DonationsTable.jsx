

import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DonationsTable = ({ donation, orgId }) => {
  const [orgData, setOrgData] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken; // Get the user's ID from the decoded token

  useEffect(() => {
    const url = `/api/organizations/${orgId}/donations`; // use userId as orgId

    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setOrgData(data[0]))
      .catch(error => console.error('Error:', error));
  }, [token, orgId]);


  if (!orgData) {
    return <div>Loading...</div>;
  }

//   return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
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
        </TableBody>
      </Table>
    </TableContainer>
};


//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableBody>
//           {donation.map((donation, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 <TableCell>Donation Id</TableCell>
//                 <TableCell>{donation.id}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Organization</TableCell>
//                 <TableCell>{donation.organization}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Donor</TableCell>
//                 <TableCell>{donation.donor}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Case Number</TableCell>
//                 <TableCell>{donation.caseNumber}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Amount</TableCell>
//                 <TableCell>{donation.amount}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Date</TableCell>
//                 <TableCell>{donation.date}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell><img src={donation.image} alt="Donation" /></TableCell>
//               </TableRow>
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };
export default DonationsTable;