import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import '../styles/Footer.scss';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footerLogo: {
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '38px',
    color: '#ffffff',
    cursor: 'pointer',
    fontFamily: 'Luckiest Guy, cursive',
    marginTop: '30px',
    '&:hover': {
      color: 'transparent',
      background: 'linear-gradient(90deg, rgb(12, 67, 1) 0%, rgba(56, 120, 3, 0.894) 49%, rgb(58, 158, 1) 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
    },
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Box sx={{ 
      width: '100%', 
      color: 'white', 
      backgroundColor: 'black', 
      height: 100 
      }}
      >
      <Grid container alignItems="center" spacing={0}>
        <Grid item xs={3}>
          <Typography variant="h6" gutterBottom className={classes.footerLogo}>
            Wild Link
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
