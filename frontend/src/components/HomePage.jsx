import '../styles/HomePage.scss';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Grid container className="home-page" spacing={3} style={{ backgroundImage: `url(/lynx-background.jpg)`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', width: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>

      <Grid item xs={12} md={6} style={{ alignSelf: 'flex-end' }}>
        <Typography variant="h1" style={{ color: '#fff', textAlign: 'center', marginBottom: '10px', marginTop: '10px' }}>Who We Are</Typography>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Typography variant="body1" className="description" style={{ width: '100%', height: 'auto', color: '#fff', textAlign: 'flex-start', marginBottom: '50px' }}>
            Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife.
            Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support their campaigns dedicated solely to wildlife causes.
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>

              <Link to="/aboutus" style={{ textDecoration: 'bold', color: 'inherit', fontSize: '18px' }}>Read More</Link>
            </div>

          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={6} style={{ alignSelf: 'flex-end', marginTop: '10px' }}>
        <Typography variant="h2" style={{ color: '#fff', textAlign: 'center', marginBottom: '10px' }}>Support Wildlife Rehabilitation</Typography>
        <Typography variant="body1" className="support-wildlife" style={{ width: '100%', height: 'auto', color: '#fff', textAlign: 'center',  marginBottom: '50px' }}>
          Supporting local wildlife rehabilitation efforts is vital for preserving biodiversity and maintaining ecological balance. By assisting in the care of injured or orphaned wildlife, individuals contribute directly to the health of their local ecosystems. Moreover, these initiatives promote environmental awareness and conservation ethics within the community, fostering a deeper connection to nature.

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to="/patientstories" style={{ textDecoration: 'bold', color: 'inherit', fontSize: '18px' }}>Stories By Group</Link>
          </div>

        </Typography>
      </Grid>

      <Grid item xs={12} md={6} style={{ alignSelf: 'flex-end', marginTop: '-25px' }}>
        <Typography variant="h2" style={{ color: '#fff', textAlign: 'center', fontSize: '48px' }}>Rehaber Needing Public Support?</Typography>
        <Typography variant="body1" className='rehab-public-support' style={{ width: '100%', height: 'auto', color: '#fff', textAlign: 'center' }}>
          Simply reach out to us, and we'll provide you with the necessary resources to get started. Let's work together to make a tangible difference in wildlife conservation.
        </Typography>
        <Typography variant="h3" style={{ width: '100%', height: 'auto', paddingTop: '10px', color: '#fff', textAlign: 'center' }}>


          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <Link to="/contactus" style={{ textDecoration: 'bold', color: 'inherit', fontSize: '18px', marginBottom: '40px' }}>Contact Us</Link>
          </div>

        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;