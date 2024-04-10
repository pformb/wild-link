// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import LoginPage from './components/LoginPage.jsx'
import DonatePage from './components/DonatePage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import PatientStoriesPage from './components/PatientStoriesPage.jsx'
import ContactUsPage from './components/ContactUsPage.jsx'
import TopNavigation from './components/TopNavigation.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState} from 'react';
// import { useApplicationData } from './hooks/useApplicationData';
import './App.css';

function App() {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage

  const [loggedIn, setLoggedIn] = useState(false);

  return (
    
    <div className="App"> 
    <BrowserRouter>
    {/* need to pass the state to top nav so passing it in app but not routes shows 2 navs though*/}
    {/* < TopNavigation loggedIn={loggedIn} setLoggedIn={setLoggedIn}/> */}

    <Routes>
      
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/donate" element={<DonatePage />} />
    <Route path="/patientstories" element={<PatientStoriesPage />} />
    <Route path="/contactus" element={<ContactUsPage />} />
    
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
