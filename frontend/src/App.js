// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute.jsx';
import LoginPage from './components/LoginPage.jsx'
import DonateForm from './components/DonateForm.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import PatientStoriesPage from './components/PatientStoriesPage.jsx'
import PatientsListPage from './components/PatientsListPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import TopNavigation from './components/TopNavigation.jsx';

import { Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
// import { useApplicationData } from './hooks/useApplicationData';
import './App.css';
import PatientForm from './components/PatientForm.jsx';
import { useAuth } from "./contexts/AuthContext";

function App() {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage

  const [loggedIn, setLoggedIn] = useState(false);
  // console.log(loggedIn); 
  const [email, setEmail] = useState('');
  const { user, logout } = useAuth();
  console.log(user);

  return (
    
    <div className="App"> 
    <TopNavigation name={user?.first_name} loggedIn={!!user} logout={logout} />

    <Routes>
      
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage setEmail={setEmail} setLoggedIn={setLoggedIn} />} />
    <Route path="/register" element={<RegistrationPage setLoggedIn={setLoggedIn}/>} />
    <Route path="/donate" element={<DonateForm/>} />
    <Route path="/patientstories" element={<PatientStoriesPage />} />
    <Route path="/contactus" element={<ContactUsPage />} />
    <Route path="/:orgId/patients" element={<PatientsListPage />} />
    <Route path="organizations/:orgId/patients/new" element={<PatientForm />} />
    <Route path="organizations/:orgId/patients/:patientId/edit" element={<PatientForm />} />
   

    </Routes>
    </div>
   
  );
}

export default App;
