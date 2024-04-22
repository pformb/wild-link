import '../styles/PatientStoriesPage.scss';
import OrganizationCard from '../components/OrganizationCard';
import useAllOrganizations from '../hooks/useAllOrganizations';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const PatientStoriesPage = () => {
  
  const orgData = useAllOrganizations();
  

  return (
    <Box 
      display="flex" 
      justifyContent="center"
    > 
      <Grid container spacing={2} mt={10} style={{ width: '90%' }}> 
        {orgData && orgData.map((org, index) => (
          <Grid 
          item xs={12} sm={12} md={3} lg={5} 
          key={index} 
          sx={{ padding: '40px', marginLeft: '85px' }}> 
            <OrganizationCard key={org.id} {...org} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PatientStoriesPage;
