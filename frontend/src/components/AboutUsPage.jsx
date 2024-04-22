
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>About Our App</Typography>
        <Typography variant="body1">Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.</Typography>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>Dev Team</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Avatar src="team-member1.jpg" alt="Team Member 1" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" gutterBottom>David Carmichael</Typography>
            <Typography variant="body1">David is our lead developer with years of experience in web development. He is passionate about creating innovative solutions to complex problems.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Avatar src="team-member2.jpg" alt="Team Member 2" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" gutterBottom>Desiree Ingram</Typography>
            <Typography variant="body1">Desiree is our UX/UI designer. They have a keen eye for detail, focused on creating intuitive user interfaces that enhance user experience.</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Avatar src="team-member-paul.jpg" alt="Team Member 3" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" gutterBottom>Paul Formby</Typography>
            <Typography variant="body1">A web development student at LightHouse Labs bootcamp. I'm passionate about coding and enjoy crafting immersive web experiences. I thrive on challenges and believe in the power of collaboration. Outside of coding, I love exploring new technologies and the outdoors.</Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default AboutUsPage;