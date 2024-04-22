// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute.jsx';
import LoginPage from './components/LoginPage.jsx';
import DonateForm from './components/DonateForm.jsx';
import RegistrationPage from './components/RegistrationPage.jsx';
import PatientStoriesPage from './components/PatientStoriesPage.jsx';
import PatientsListPage from './components/PatientsListPage.jsx';
import ContactUsPage from './components/ContactUsPage.jsx';
import TopNavigation from './components/TopNavigation.jsx';
import OrgManagement from './components/OrgManagement.jsx';
import UserManagement from './components/UserManagement.jsx';
import AboutUsPage from './components/AboutUsPage.jsx';
import OrgPatientList from "./components/OrgPatientList.jsx";
import PrivacyPolicy from './components/PrivacyPolicy.jsx';
import Footer from './components/Footer.jsx';

import { Route, Routes, useParams } from "react-router-dom";
import './App.css';
import PatientForm from './components/PatientForm.jsx';
import { useAuth } from "./contexts/AuthContext";

import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily:
      'Raleway, Zilla Slab, Arial, sans-serif',
    h1: {
      fontFamily: 'Zilla Slab, Arial, sans-serif',
    },
    h2: {
      fontFamily: 'Zilla Slab, Arial, sans-serif',
    },
  },
  palette: {
    primary: {
      main: '#DBCA2A',
    },
    secondary: {
      main: '#d0d4ed',
    },
    contrast: {
      main: '#3800d2',
    },
    contrastThreshold: 4.1,
    tonalOffset: 0.2,
  },
});


function App() {
  const { user, logout } = useAuth();
  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <TopNavigation name={user?.first_name} loggedIn={!!user} logout={logout} />

        <Routes>
          <Route index element={<HomeRoute />} />
          <Route path="/home" element={<HomeRoute />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/donate" element={<DonateForm />} />
          <Route path="/patientstories" element={<PatientStoriesPage />} />
          <Route path="/contactus" element={<ContactUsPage />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/:orgId/patients" element={<PatientsListPage />} />
          <Route path="organizations/:orgId/patients" element={<OrgPatientList />} />
          <Route path="organizations/:orgId/patients/new" element={<PatientForm key={useParams().orgId} />} />
          <Route path="organizations/:orgId/patients/:patientId/edit" element={<PatientForm />} />
          <Route path="/organizations/:orgId/profile" element={<OrgManagement />} />
          <Route path="/users/:userId" element={<UserManagement />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
