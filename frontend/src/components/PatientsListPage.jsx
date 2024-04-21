import '../styles/PatientsListPage.scss';
import PatientCard from '../components/PatientCard';
import useAllPatientsByOrg from '../hooks/useAllPatientsByOrg';
import { useParams } from 'react-router-dom'; 
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const PatientsListPage = () => {
  const { orgId } = useParams(); 
  const patData = useAllPatientsByOrg(orgId); 

  return (
    <Box display="flex" justifyContent="center"> 
      <Grid container spacing={2} mt={10} style={{ width: '90%' }}> 
        {patData && patData.map((pat, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}> 
            <PatientCard pat={pat} orgId={orgId} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default PatientsListPage;
