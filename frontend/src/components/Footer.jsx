import { styled } from '@mui/system';
import { Container, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const FooterContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(3, 2),
  marginTop: 'auto',
  background: '#9b9245',
  boxShadow: '0 4px 6px -6px #222',
  height: '30px'
}));

const Footer = () => {
  return (
<FooterContainer maxWidth={false}>
        <Typography variant="body2" color="textSecondary" >
        <RouterLink to="/aboutus" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>About Us</RouterLink>
        <RouterLink to="/contactus" style={{ textDecoration: 'none', color: 'white', padding: '5px' }}>Contact Us</RouterLink>
        </Typography>
        </FooterContainer>
  );
};

export default Footer;