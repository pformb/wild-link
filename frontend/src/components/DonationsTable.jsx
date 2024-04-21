

import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DonationsTable = ({ donation, isOrg }) => {
  return (
    <Container align="center">
      <TableContainer component={Paper} sx={{ width: '80vw', maxWidth: '100%' }}>
        <Table>
          <TableBody>
            {donation.map((donation, index) => (
              isOrg ? (
                <TableRow key={index}>
                  <TableCell>User Full Name: {donation.user_full_name}</TableCell>
                  <TableCell>Patient Case: {donation.patient_case}</TableCell>
                  <TableCell>Donation Amount: ${donation.donation_in_cents / 100}.00 </TableCell>
                  <TableCell>Donation Date: {new Date(donation.donation_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <img src={donation.image} alt="User" style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                </TableRow>
              ) : (
                <TableRow key={index}>
                  <TableCell>Patient Case: {donation.patient_case}</TableCell>
                  <TableCell>Donation Amount: ${donation.donation_in_cents / 100}.00 </TableCell>
                  <TableCell>Donation Date: {new Date(donation.donation_date).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <img src={donation.image} alt="User" style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                </TableRow>
              )
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DonationsTable;

// return (
//   <Container align="center">
//     <TableContainer component={Paper} sx={{ width: '80vw', maxWidth: '100%' }}>
//       <Table>
//         <TableBody>
//           {donation.map((donation, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 <TableCell>First Name</TableCell>
//                 <TableCell>{donation.first_name}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Last Name</TableCell>
//                 <TableCell>{donation.last_name}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Email</TableCell>
//                 <TableCell>{donation.email}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Phone Number</TableCell>
//                 <TableCell>{donation.phone_number}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Address</TableCell>
//                 <TableCell>{donation.address}</TableCell>
//               </TableRow>
//               <TableRow>
//                 <TableCell>Image</TableCell>
//                 <TableCell><img src={donation.image} alt="User" /></TableCell>
//               </TableRow>
//             </React.Fragment>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   </Container>
// );
// };