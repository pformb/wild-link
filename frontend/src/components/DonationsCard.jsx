import React from 'react';
//styling
//hooks

const DonationsCard = ({donation, isUserContext}) => {

  return (
    <div className="DonationCard">
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
