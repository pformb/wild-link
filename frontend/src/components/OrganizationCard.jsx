import '../styles/OrganizationCard.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const OrganizationCard = (orgData) => {

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
      <Button variant="outlined">View More</Button>
      </Link>
    </div>
  );
}

export default OrganizationCard;
