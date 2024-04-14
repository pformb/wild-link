import React from 'react';
import '../styles/DonationsCard.scss';
//hooks

const DonationsCard = ({donation, isUserContext}) => {

  if (!donation) {
    return null;
  }
  
  return (
    <div className="donation-card">
      <p>Donation Id: {donation.id}</p>
      {isUserContext ? (
        <p>Organization: {donation.organization}</p>
      ) : (
        <p>Donor: {donation.donor}</p>
      )}
      <p>Case Number: {donation.caseNumber}</p>
      <p>Amount: {donation.amount}</p>
      <p>Date: {donation.date}</p>
      <img src={donation.image} alt="Donation" />
    </div>
  );
};

export default DonationsCard;

// const DonationsCard = ({ donation data here  }) => {
//   return (
//     <div className="donation-card">
//       <p>Donation Id: {donation.id}</p>
//       <p>Organization: {donation.organization}</p>
//       <p>Donor: {donation.donor}</p>
//       <p>Case Number: {donation.caseNumber}</p>
//       <p>Amount: {donation.amount}</p>
//       <p>Date: {donation.date}</p>
//       <img src={donation.image} alt="Donation" />
//     </div>
//   );
// }

// export default DonationsCard;