// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute.jsx';
import LoginPage from './components/LoginPage.jsx'
import DonatePage from './components/DonatePage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import PatientStoriesPage from './components/PatientStoriesPage.jsx'
import PatientsListPage from './components/PatientsListPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import TopNavigation from './components/TopNavigation.jsx';
import OrgManagement from './components/OrgManagement.jsx';
import UserManagement from './components/UserManagement.jsx';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
// import { useApplicationData } from './hooks/useApplicationData';
import './App.css';
import PatientForm from './components/PatientForm.jsx';

function App() {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');

  const [userType, setUserType] = useState(''); // 'user' or 'organization'
  const [orgId, setOrgId] = useState('');
  const [usersId, setUsersId] = useState('');

  return (
    
    <div className="App"> 
    <BrowserRouter>
    < TopNavigation email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} userType={userType} orgId={orgId} usersId={usersId} setUsersId={setUsersId}/>

    <Routes>
      
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage setEmail={setEmail} setLoggedIn={setLoggedIn} setUserType={setUserType} setOrgId={setOrgId} setUsersId={setUsersId}/>}/>
    <Route path="/register" element={<RegistrationPage setLoggedIn={setLoggedIn}/>} />
    <Route path="/donate" element={<DonatePage />} />
    <Route path="/patientstories" element={<PatientStoriesPage />} />
    <Route path="/contactus" element={<ContactUsPage />} />
    <Route path="/:orgId/patients" element={<PatientsListPage />} />
    <Route path="organizations/:orgId/patients/new" element={<PatientForm />} />
    <Route path="organizations/:orgId/patients/:patientId/edit" element={<PatientForm />} />
    <Route path="/organizations/:orgId/profile" element={<OrgManagement setLoggedIn={setLoggedIn} email={email} />} />
    <Route path="/users/:userId" element={<UserManagement usersId={usersId} />} />

    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
