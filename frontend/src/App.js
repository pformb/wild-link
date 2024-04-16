// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute.jsx';
import LoginPage from './components/LoginPage.jsx'
import DonatePage from './components/DonatePage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import PatientStoriesPage from './components/PatientStoriesPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import TopNavigation from './components/TopNavigation.jsx';
import OrgManagement from './components/OrgManagement.jsx';
import UserManagement from './components/UserManagement.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
// import { useApplicationData } from './hooks/useApplicationData';
import './App.css';

function App() {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState(''); // 'user' or 'organization'
  const [orgId, setOrgId] = useState(null);

  return (
    
    <div className="App"> 
    <BrowserRouter>
    < TopNavigation email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} userType={setUserType} orgId={orgId}/>

    <Routes>
      
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage setEmail={setEmail} setLoggedIn={setLoggedIn} setUserType={setUserType} setOrgId={setOrgId}/>} />
    <Route path="/register" element={<RegistrationPage setLoggedIn={setLoggedIn}/>} />
    <Route path="/donate" element={<DonatePage />} />
    <Route path="/patientstories" element={<PatientStoriesPage />} />
    <Route path="/contactus" element={<ContactUsPage />} />
    <Route path="/organizations/:orgId/profile" element={<OrgManagement setLoggedIn={setLoggedIn} email={email} />} />
    <Route path="/users" element={<UserManagement />} />
    
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
