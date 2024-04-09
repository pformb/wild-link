import '../styles/OrganizationCard.scss';


const OrganizationCard = () => {
  return (
    <div className="organization-card">
      <img 
      className="organization-prof-pic" 
      src="/mock-organization-prof-pic.png" 
      alt="home" />
      <h2 className="organization-name">Organization Name</h2>
      <p className="organization-location">Organization Location</p>
      <p className="organization-website">Organization Website</p>
      <button className="btn-view-org">View</button>
      
    </div>
  );
}

export default OrganizationCard;


// Replace the above code with the following code after API request

// import React from 'react';
// import '../styles/OrganizationCard.scss';

// const OrganizationCard = ({ organization }) => {
//   return (
//     <div className="organization-card">
//       <img 
//         className="organization-prof-pic" 
//         src={organization.profilePic} // Use organization data
//         alt={organization.name} // Use organization data
//       />
//       <h2 className="organization-name">{organization.name}</h2> {/* Use organization data */}
//       <p className="organization-location">{organization.location}</p> {/* Use organization data */}
//       <p className="organization-website">{organization.website}</p> {/* Use organization data */}
//       <button className="btn-view-org">View</button>
//     </div>
//   );
// }

// export default OrganizationCard;
