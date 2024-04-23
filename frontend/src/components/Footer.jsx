import { styled } from '@mui/system';
import { Container, Typography, Grid, IconButton, SvgIcon } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const FooterContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  background: 'linear-gradient(180deg, white, #9b9245)',
  boxShadow: '0 4px 6px -6px #222',
  height: '90px'
}));

const Footer = () => {
  return (
    <FooterContainer maxWidth={false}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2" color="textSecondary">
            <RouterLink to="/aboutus" style={{ textDecoration: 'none', color: 'black', padding: '5px' }}>About Us</RouterLink>
            <RouterLink to="/contactus" style={{ textDecoration: 'none', color: 'black', padding: '5px' }}>Contact Us</RouterLink>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary"><RouterLink to="/privacy" style={{ textDecoration: 'none', color: 'black', padding: '5px' }}>Privacy Policy</RouterLink></Typography>
          </Grid>
        <Grid item>
          <Typography variant="body2" color="textSecondary">Follow Us:</Typography>
          <IconButton color="inherit" href="https://www.facebook.com" target="_blank">
            <SvgIcon>
              <path d="M22 5.16c-.406-.054-1.806-.16-3.43-.16-3.4 0-5.733 1.825-5.733 5.17v2.882H9v3.913h3.837V27h4.604V16.965h3.823l.587-3.913h-4.41v-2.5c0-1.123.347-1.903 2.198-1.903H22V5.16z" fill="currentColor" />
            </SvgIcon>
          </IconButton>
          <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
            <SvgIcon>
              <path d="M22.1 0H1.9C.85 0 0 .85 0 1.9v20.2C0 23.15.85 24 1.9 24h20.2c1.05 0 1.9-.85 1.9-1.9V1.9C24 .85 23.15 0 22.1 0zm-11 7c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5zm11 17.1c0 .49-.4.9-.9.9h-4.2c-.5 0-.9-.4-.9-.9v-8h1.8v1.2s1.7-2 4-2c2.5 0 4.2 1.8 4.2 4.3v4.5z" fill="currentColor" />
            </SvgIcon>
          </IconButton>
          <IconButton color="inherit" href="https://github.com" target="_blank">
            <SvgIcon>
              <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.3-3.2-.1-.3-.6-1.6.1-3.3 0 0 1.1-.3 3.6 1.3a12.3 12.3 0 016.4 0c2.5-1.6 3.6-1.3 3.6-1.3.7 1.7.2 3 .1 3.3.8.8 1.3 1.9 1.3 3.2 0 4.7-2.8 5.7-5.5 6 .4.3.8.9.8 2v3c0 .3.2.7.8.6A12 12 0 0012 .3" fill="currentColor" />
            </SvgIcon>
          </IconButton>
        </Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;