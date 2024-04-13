import React from 'react';
//import { useApplicationData } from '../hooks/useApplicationData.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/OrgManagement.scss';

const OrgManagement = ( setLoggedIn, email) => {
  // const { orgData } = useApplicationData();
  // orgData={orgData} Pass to PatientStoriesPage
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [orgData, setOrgData] = useState([]); //unsure yet if this is needed
  console.log(loggedIn);

  //handle Edit Organization Information

  useEffect(() => {
    fetch('/api/organizations')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

//   const handleEditOrg = (orgId) => {}

//   const handleDeleteOrg = (orgId) => {}

//   const handleAddOrg = () => {}

//   handle Donations to Organization

//   const trackDonations = (orgId) => {}


  return (
    <div className="OrgManagement">
      <h1>Organization Management</h1>
    </div>
  );
};

export default OrgManagement;