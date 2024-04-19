

import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';

const DonationsTable = () => {
  const [orgData, setOrgData] = useState([]);
  const token = localStorage.getItem("token");
  const decodedToken = jwtDecode(token);
  const { userId } = decodedToken; // Get the user's ID from the decoded token

  useEffect(() => {
    const url = `/api/organizations/${userId}/donations`; // use userId as orgId

    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => setOrgData(data))
      .catch(error => console.error('Error:', error));
  }, [token, userId]);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {orgData.map((donation, index) => (
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



// import React, { useEffect, useState } from 'react';
// import { jwtDecode } from "jwt-decode";
// import { useAuth } from "../contexts/AuthContext";
// import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
// //hooks
// const DonationsTable = () => {
//   const [userData, setUserData] = useState({});
//   const [orgData, setOrgData] = useState({});
//   const { user } = useAuth();
//   const token = localStorage.getItem("token");
//   const decodedToken = jwtDecode(token);
//   const { userId, role } = decodedToken; // Get the user's ID and role from the decoded token

//   useEffect(() => {
//     // Determine the URL for fetching the donations
//     const url = role === 'users'
//       ? `/api/users/${userId}/donations`
//       : `/api/organizations/${userId}/donations`; // use userId as orgId when role is 'organizations'

//     // Fetch the donations
//     fetch(url, {
//       headers: {
//         'Authorization': `Bearer ${token}`
//       }
//     })
//       .then(response => response.json())
//       .then(data => {
//         if (role === 'users') {
//           setUserData(data);
//         } else {
//           setOrgData(data);
//         }
//       })
//       .catch(error => console.error('Error:', error));
//   }, [token, userId, role]); // Add userId and role to the dependency array

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableBody>
//           {role === 'users' ? userData.map((donation, index) => (
//             <React.Fragment key={index}>
//               <TableRow>
//                 {/* ... */}
//               </TableRow>
//             </React.Fragment>
//           )) : orgData.map((donation, index) => (
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

// export default DonationsTable;

// /**dead code */