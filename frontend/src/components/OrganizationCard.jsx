import '../styles/OrganizationCard.scss';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';

const OrganizationCard = (orgData) => {
  console.log(orgData);

  return (
    <Card sx={{ width: 475, maxWidth: 475 }}>
      <CardMedia
        sx={{ height: 140, objectFit: 'cover'}}
        image={orgData.image}
        title={orgData.name} 
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        <h3 className="organization-name">{orgData.organization_name}</h3>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location"><strong>{orgData.address}</strong></p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location"><strong>{orgData.website_url}</strong></p>
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p className="organization-location"><strong>{orgData.phone_number}</strong></p>
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
