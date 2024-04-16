import '../styles/OrganizationCard.scss';
import { Link } from 'react-router-dom';

const OrganizationCard = (orgData) => {
  console.log(`orgData:`, orgData);
  return (
    <div className="organization-card">
      <img 
        className="organization-prof-pic" 
        src={orgData.image} 
        alt={orgData.name} 
      />
      <h2 className="organization-name">{orgData.organization_name}</h2> 
      <p className="organization-location">{orgData.location}</p> 
      <p className="organization-website">{orgData.website_url}</p> 
      <p className="organization-phone">{orgData.phone_number}</p> 
      <Link to={`/${orgData.id}/patients`}>
        <button className="btn-view-org">View</button>
      </Link>
    </div>
  );
}

export default OrganizationCard;
