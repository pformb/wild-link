
import React from 'react';
import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';
import { withStyles } from '@mui/styles';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DonationsTable = ({ donation, isOrg }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Container align="center">
      <TableContainer component={Paper} sx={{ width: '80vw', maxWidth: '100%' }}>
        <Table>
          <TableHead>
            <StyledTableRow>
              {isOrg && <StyledTableCell>User Full Name</StyledTableCell>}
              <StyledTableCell>Patient Case</StyledTableCell>
              <StyledTableCell>Donation Amount</StyledTableCell>
              <StyledTableCell>Donation Date</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {donation.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((donation, index) => (
              <StyledTableRow key={index}>
                {isOrg && <StyledTableCell>{donation.user_full_name}</StyledTableCell>}
                <StyledTableCell>{donation.patient_case}</StyledTableCell>
                <StyledTableCell>${donation.donation_in_cents / 100}.00</StyledTableCell>
                <StyledTableCell>{new Date(donation.donation_date).toLocaleDateString()}</StyledTableCell>
                <StyledTableCell>
                  <img src={donation.image} alt="User" style={{ width: '50px', height: '50px' }} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={donation.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
};

export default DonationsTable;

// import React from 'react';
// import { Container, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Paper } from '@mui/material';

// const DonationsTable = ({ donation, isOrg }) => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(5);

// const handleChangePage = (event, newPage) => {
//   setPage(newPage);
// };

// const handleChangeRowsPerPage = (event) => { 
//   setRowsPerPage(parseInt(event.target.value, 10));
//   setPage(0);
// };

//   return (
//     <Container align="center">
//       <TableContainer component={Paper} sx={{ width: '80vw', maxWidth: '100%' }}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               {isOrg && <TableCell>User Full Name</TableCell>}
//               <TableCell>Patient Case</TableCell>
//               <TableCell>Donation Amount</TableCell>
//               <TableCell>Donation Date</TableCell>
//               <TableCell>Image</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {donation.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((donation, index) => (
//               <TableRow key={index}>
//                 {isOrg && <TableCell>{donation.user_full_name}</TableCell>}
//                 <TableCell>{donation.patient_case}</TableCell>
//                 <TableCell>${donation.donation_in_cents / 100}.00</TableCell>
//                 <TableCell>{new Date(donation.donation_date).toLocaleDateString()}</TableCell>
//                 <TableCell>
//                   <img src={donation.image} alt="User" style={{ width: '50px', height: '50px' }} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={donation.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </Container>
//   );
// };

// export default DonationsTable;