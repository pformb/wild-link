import '../styles/HomePage.scss';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Grid container className="home-page" spacing={3} style={{ width: 'auto' }}>
      <Grid item xs={12} md={6}>
        <img className="marmot" src="/stock-photos/raccoon.jpg" alt="eagle" style={{width: 'auto', height: 'auto'}}/>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h1" style={{ color: '#fff', paddingLeft: '60px'}} >Who We Are</Typography>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Typography variant="body1" className="description" style={{ width: '100%', height: 'auto', paddingTop: '10px', color: '#fff' }}>
          Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.
          <Link to="/aboutus" style={{ textDecoration: 'bold', color: 'inherit', paddingLeft: '150px', paddingTop: '50px', marignTop: '80px', fontSize: '18px'}}>Read More</Link>
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} md={6}>
        <Typography variant="h2">Support Wildlife Rehabilitation</Typography>
        <Typography variant="body1" className="support-wildlife" style={{ width: '100%', height: 'auto', paddingTop: '50px', paddingBottom: '50px' }}>
          Supporting local wildlife rehabilitation efforts is vital for preserving
          biodiversity and maintaining ecological balance. By assisting in the care
          of injured or orphaned wildlife, individuals contribute directly to the
          health of their local ecosystems. Moreover, these initiatives promote
          environmental awareness and conservation ethics within the community,
          fostering a deeper connection to nature.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <img className="home-pic2" src="/home-page-pic2.png" alt="home" />
      </Grid>

      <Grid item xs={12} md={6}>
        <img className="eagle" src="/eagle.png" alt="eagle" />
      </Grid>
      <Grid item xs={12} md={6} className="content-right">
        <Typography variant="h2">Rehaber Needing Public Support?</Typography>
        <Typography variant="body1" className='rehab-public-support' style={{ width: '100%', height: 'auto', paddingTop: '50px' }}>
          We're excited to offer you the opportunity to utilize our
          app, Wild Link, for your conservation initiatives.
          With Wild Link, you can easily create and support
          campaigns dedicated to wildlife causes. Simply reach
          out to us, and we'll provide you with the necessary
          resources to get started. Let's work together to
          make a tangible difference in wildlife conservation.
        </Typography>
        <Typography variant="h3" style={{ width: '100%', height: 'auto', paddingTop: '50px' }}>
          <Link to="/contactus" style={{ textDecoration: 'none', color: 'inherit' }}>Contact Us Today!</Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomePage;
