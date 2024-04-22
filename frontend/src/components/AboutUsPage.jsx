
import React from 'react';
import { Box, Typography, Grid, Avatar } from '@mui/material';

const AboutUsPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" gutterBottom>About Our App</Typography>
        <Typography variant="body1">Wild Link is a groundbreaking web application designed to harness the power of collective goodwill for the conservation of wildlife. Much like popular crowdfunding platforms, Wild Link provides a seamless interface for users to create and support campaigns dedicated solely to wildlife causes.</Typography>
        <Typography variant="body1">            Wild Link is a groundbreaking web application designed to harness the power of
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
            safeguard our planet's natural treasures for generations to come.</Typography>
      </Box>
      <Box>
        <Typography variant="h4" gutterBottom>Dev Team</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Avatar src="team-member-david.jpg" alt="Team Member 1" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" gutterBottom>David Carmichael</Typography>
            <Typography variant="body1">David is our lead student developer. He is passionate about wildlife and volunteers at a local wildlife rehabilitation hospital. He dreams of a future where technology is combined with nature to ensure healthy thriving ecosystems for all living things that call them home. You can often find him exploring the forests, mountains and beaches of Vancouver Island</Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Avatar src="team-member-desiree.jpg" alt="Team Member 2" sx={{ width: 100, height: 100 }} />
            <Typography variant="h5" gutterBottom>Desiree Ingram</Typography>
            <Typography variant="body1">Desiree is our UX/UI designer. They have a keen eye for detail, focused on creating intuitive user interfaces that enhance user experience. When not coding, reading new documentation, and then trying new experiments. They can be found out in their vegtable garden, hiking, and knitting on a beautiful Vancouver Island beach.</Typography>
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