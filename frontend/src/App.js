// import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import LoginPage from './components/LoginPage.jsx'
import DonatePage from './components/DonatePage.jsx'
import RegistrationPage from './components/RegistrationPage.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  // const { 
  //   returnHome,
  //   fetchLogin
  // } = useApplicationData();

  return (
    
    <div className="App"> 
    <BrowserRouter>
    <Routes>
    <Route index element={<HomeRoute />} />
    <Route path="/home" element={<HomeRoute />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/donate" element={<DonatePage />} />
    
    </Routes>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
