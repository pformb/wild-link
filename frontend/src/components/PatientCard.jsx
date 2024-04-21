import '../styles/PatientCard.scss';
import React, { useState } from 'react';
import BasicModal from '../routes/BasicModal';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

const PatientCard = ({ pat, orgId }) => {

  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="patient"
        height="200"
        image={pat.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {pat.name}
        </Typography>
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