import '../styles/PatientCard.scss';
import React, { useState } from 'react';
import BasicModal from '../routes/BasicModal';

const PatientCard = ({ pat }) => {

  console.log(`patData on card:`, pat);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="patient-card">
      <div className="patient-content">
        <img 
          className="patient-prof-pic" 
          src={pat.image} 
          alt={pat.name} />
          <h2 className="patient-name">{pat.species}</h2>
        <div className="patient-details">

          <h3 className="patient-status">Status: {pat.is_released ? 'Released' : 'Admitted'}</h3>
          <BasicModal open={isModalOpen} onClose={handleCloseModal} />
          
        </div>
      </div>
    </div>
  );
}

export default PatientCard;

// <p className="patient-location">Location Found: {location_found}</p>
// <p className="patient-condition">Condition: {condition_name}</p>
// <p className="patient-treatment">Treatment: {treatment_name}</p>
// <p className="patient-cost">Treatment Cost: ${treatment_cost}</p>
// <p className="patient-age">Age Range: {age_range}</p>
// <p className="patient-admitted">Date Admitted: {date_admitted}</p>


