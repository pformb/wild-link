import '../styles/OrganizationCard.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

const OrganizationCard = (orgData) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140, objectFit: 'cover' }}
        image={orgData.image}
        title={orgData.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        <h2 className="organization-name">{orgData.organization_name}</h2>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location">{orgData.location}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location">{orgData.website_url}</p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location">{orgData.phone_number}</p>
        </Typography>
        
      </CardContent>
      <CardActions sx={{ justifyContent: 'center' }}>
      <Link to={`/${orgData.id}/patients`}>
      <Button variant="outlined">View</Button>
      </Link>
      </CardActions>
    </Card>
  );
}

export default OrganizationCard;
