import '../styles/HomePage.scss';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@mui/material';
import FullLogo_Transparent from "../FullLogo_Transparent.png";

const HomePage = () => {
  return (
    <Grid container className="home-page" spacing={3} style={{ width: 'auto' }}>
      <Grid item xs={12} md={6}>
        <img src={FullLogo_Transparent} alt="Logo" style={{ width: '100%', height: 'auto', paddingTop: '50px' }} />
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography variant="h1" >Who We Are</Typography>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <Typography variant="body1" className="description" style={{ width: '100%', height: 'auto', paddingTop: '50px', marginRight: '150px' }}>
            Wild Link is a groundbreaking web application designed to harness the power of
            collective goodwill for the conservation of wildlife.
            Much like popular crowdfunding platforms, Wild Link
            provides a seamless interface for users to create
            and support campaigns dedicated solely to wildlife causes.
            Whether it's protecting endangered species, preserving
            vital habitats, or funding research initiatives, Wild Link
            empowers users to directly contribute to the well-being of our
            planet's diverse flora and fauna. With its intuitive design and
            robust features, Wild Link serves as a virtual hub where passionate
            individuals, organizations, and wildlife enthusiasts unite to make a
            tangible difference in the conservation efforts worldwide. Join the
            Wild Link community today and be a part of the movement to
            safeguard our planet's natural treasures for generations to come.
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
