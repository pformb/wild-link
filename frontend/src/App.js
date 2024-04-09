// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import LoginPage from './components/LoginPage.jsx'
import DonatePage from './components/DonatePage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import PatientStoriesPage from './components/PatientStoriesPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useApplicationData } from './hooks/useApplicationData';
import './App.css';

function App() {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage

  return (
    
    <div className="App"> 
    <BrowserRouter>
    <Routes>
      
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/donate" element={<DonatePage />} />
    <Route path="/patientstories" element={<PatientStoriesPage />} />
    
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
