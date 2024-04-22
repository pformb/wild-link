import '../styles/PatientCard.scss';
import React, { useState } from 'react';
import BasicModal from '../routes/BasicModal';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { alpha } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const PatientCard = ({ pat, orgId }) => {

  const theme = useTheme();
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  console.log(pat);

  //styling with the greet component
  return (
    <Card sx={{ maxWidth: 345, 
      boxShadow: `0 4px 8px 0 ${alpha(theme.palette.primary.main, 0.2)}, 0 6px 20px 0 ` }}>
      <CardMedia
        component="img"
        alt="patient"
        height="220"
        image={pat.image}
      />
      <CardContent>
        <Box display="flex" alignItems="row" justifyContent="space-between" fontSize={5}>
        <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '13px' }}>
        <strong>Case # </strong>{pat.patient_case   }
        </Typography>
        <br />
        <Typography gutterBottom variant="body2" component="div" sx={{ fontSize: '13px' }}>
        <strong>Species: </strong>{pat.species}
        </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
        <strong>Status:</strong> {pat.is_released ? 'Released' : 'Admitted'}
        </Typography>
      </CardContent>
      <Box mb={3}>
        <BasicModal patient={pat} orgId={orgId} open={isModalOpen} onClose={handleCloseModal}  />
        </Box>
    </Card>

  );
}

//Alternate card styling

// import '../styles/PatientCard.scss';
// import React, { useState } from 'react';
// import BasicModal from '../routes/BasicModal';
// import Card from '@mui/material/Card';
// import Box from '@mui/material/Box';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import CardActions from '@mui/material/CardActions';
// import Button from '@mui/material/Button';
// import { alpha } from '@mui/system';
// import { useTheme } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';

// const PatientCard = ({ pat, orgId }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const theme = useTheme();

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   console.log(pat);

//   return (
//     <Card sx={{ maxWidth: 345,
//      backgroundColor: 'white',
//       borderRadius: '15px',
//       boxShadow: `0 4px 8px 0 ${alpha(theme.palette.primary.main, 0.2)}, 0 6px 20px 0 `
//        }}>
//       <CardContent>
//         <Typography variant="h6">{`Patient Case #${pat.patient_case}`}</Typography>
//       </CardContent>
//       <CardMedia
//         component="img"
//         alt="patient"
//         height="220"
//         image={pat.image}
//         sx={{ borderRadius: '15px 15px 0 0' }}
//       />
//       <CardContent>
//         <Typography variant="body1">
//           <strong>Species: </strong>{pat.species}
//         </Typography>
//         <Typography variant="body1">
//           <strong>Status: </strong>{pat.is_released ? 'Released' : 'Admitted'}
//         </Typography>
//       </CardContent>
//       <Box mb={3}>
//         <BasicModal patient={pat} orgId={orgId} open={isModalOpen} onClose={handleCloseModal} />
//       </Box>
//     </Card>
//   );
// }

export default PatientCard;

    // <div className="patient-card">
    //   <div className="patient-content">
    //     <img 
    //       className="patient-prof-pic" 
    //       src={pat.image} 
    //       alt={pat.name} />
    //       <p className="patient-name"><strong>{pat.species}</strong></p>
    //     <div className="patient-details">

    //       <p className="patient-status"><strong>Status:</strong> {pat.is_released ? 'Released' : 'Admitted'}</p>
    //       <BasicModal patient={pat} orgId={orgId} open={isModalOpen} onClose={handleCloseModal} />
    //     </div>
    //   </div>
    // </div>