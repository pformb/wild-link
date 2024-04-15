//Try 2 

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/OrgManagement.scss';
import DonationsCard from './DonationsCard';

const OrgManagement = () => {
  const { orgId } = useParams();
  console.log('orgId:', orgId);
  const [orgData, setOrgData] = useState({
    organization_name: '',
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    phone_number: '',
    password: '',
    confirm_password: ''
  });

  //fetch specific organization data to render Admin Dashboard
  // useEffect(() => {
  //   fetch(`/api/organizations/${orgId}/profile`)
  //   .then(response => response.json())
  //   .then(data => setOrgData(data));
  // }, [orgId]);

  useEffect(() => {
    const fetchOrgProfile = async () => {
      try {
        const response = await fetch(`/api/organizations/${orgId}/profile`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrgData(data);
      } catch (error) {
        console.error('Error fetching organization profile:', error);
      }
    };
  
    fetchOrgProfile();
  }, [orgId]);

  // const onHandleSubmit = (event) => {
  //   event.preventDefault();


  //   //submit the form data
  //   fetch(`/api/organizations/${orgId}/profile`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(orgData),
  //   })
  //   .then(response => response.json())
  //   .then(data => setOrgData(data));
  // };

  const onHandleSubmit = (event) => {
    event.preventDefault();
  
    //submit the form data
    fetch(`/api/organizations/${orgId}/profile`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orgData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => setOrgData(data))
    .catch(error => console.error('Error updating organization profile:', error));
  };

  //handle Edit Organization Information
  const onHandleChange = (event) => {
    setOrgData({
      ...orgData,
      [event.target.name]: event.target.value
    });
  };

    return (
      <div className="OrgManagement">
        <h1>Organization Admin Dashboard</h1>
        <h2>Organization Information</h2>
        <div className="org-mgmt">
          <div className="org-mgmt__content">
            <form onSubmit={onHandleSubmit}>
              <label>
                Organization Name:
                <input type="text" name="organization_name" value={orgData.organization_name} onChange={onHandleChange} />
              </label>
              <label>
                First Name:
                <input type="text" name="first_name" value={orgData.first_name} onChange={onHandleChange} />
              </label>
              <label>
                Last Name:
                <input type="text" name="last_name" value={orgData.last_name} onChange={onHandleChange} />
              </label>
              <label>
                Organization Email:
                <input type="email" name="email" value={orgData.email} onChange={onHandleChange} />
              </label>
              <label>
                Organization Address:
                <input type="text" name="address" value={orgData.address} onChange={onHandleChange} />
              </label>
              <label>
                Organization Phone:
                <input type="text" name="phone_number" value={orgData.phone_number} onChange={onHandleChange} />
              </label>
              <label>
                Organization Password:
                <input type="text" name="password" value={orgData.password} onChange={onHandleChange} />
              </label>
              <label>
                Organization Confirm Password:
                <input type="text" name="confirm_password" value={orgData.confirm_password} onChange={onHandleChange} />
              </label>
              <button type="submit">Edit Organization Information</button>
            </form>
            <DonationsCard />
          </div>
        </div>
      </div>
   );
};

export default OrgManagement;


// import React from 'react';
// //import { useApplicationData } from '../hooks/useApplicationData.js';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import '../styles/OrgManagement.scss';
// import './DonationsCard';
// import DonationsCard from './DonationsCard';

// const OrgManagement = () => {
//   const { orgId } = useParams();

//   //Org specific state variables for each input to be updated
//   const [organization_name, setOrgName] = useState('');
//   const [first_name, setFirstName] = useState('');
//   const [last_name, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [address, setAddress] = useState('');
//   const [phone_number, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirm_password, setConfirmPassword] = useState('');
//   const [orgData, setOrgData] = useState([]); //unsure yet if this is needed


//     //handle Edit Organization Information
//     //need to do some reseach on this
//     const onHandleSubmit = (event) => {
//       event.preventDefault();

//       const data = new FormData(event.target);

//       setOrgData({
//         organization_name: data.get('organization_name'),
//         first_name: data.get('first_name'),
//         last_name: data.get('last_name'),
//         email: data.get('email'),
//         address: data.get('address'),
//         phone_number: data.get('phone_number'),
//         // image: data.get('image'),
//         password: data.get('password'),
//         confirm_password: data.get('confirm_password')
//       });

//       fetch(`/api/organizations/${orgId}/profile`, {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({     
//           organization_name,
//           first_name,
//           last_name,
//           email,
//           address,
//           phone_number,
//           password,
//           confirm_password}),
//       })
//         .then(response => response.json())
//         .then(data => setOrgData(data));
//         };
        
//         return (
//           <div className="OrgManagement">
//             <h1>Organization Admin Dashboard</h1>
      
//             <h2>Organization Information</h2>
//               <div className="org-mgmt">
//                 <div className="org-mgmt__content">
//               <form onSubmit={onHandleSubmit}>
//                   <label>
//                     Organization Name:
//                     <input type="text" name="organization_name" value={organization_name} onChange={e => setOrgName(e.target.value) } />
//                   </label>
//                   <label>
//                     First Name:
//                     <input type="text" name="first_name" value={first_name} onChange={e => setFirstName(e.target.value) } />
//                   </label>
//                   <label>
//                     Last Name:
//                     <input type="text" name="last_name" value={last_name} onChange={e => setLastName(e.target.value) } />
//                   </label>
//                   <label>
//                     Organization Email:
//                     <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
//                   </label>
//                   <label>
//                     Organization Address:
//                     <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />
//                   </label>
//                   <label>
//                     Organization Phone:
//                     <input type="text" name="phone" value={phone_number} onChange={e => setPhoneNumber(e.target.value)}/>
//                   </label>
//                   {/* <label>
//                     Organization Image:
//                     <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} />
//                   </label> */}
//                   <label>
//                     Organization Password:
//                     <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
//                   </label>
//                   <label>
//                     Organization Confirm Password:
//                     <input type="text" name="confirm_password" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
//                   </label>
//                   <button type="submit">Edit Organization Information</button>
//                 </form>
//                 <DonationsCard />
//             </div>
//           </div>
//         </div>
//         );
//       };
// export default OrgManagement;

/*


  
//fetch specific organization data to render Admin Dashboard
  // useEffect(() => {
  //   fetch('/api/organizations/${orgId}')
  //     .then(response => response.json())
  //     .then(data => setOrgData(data));
  // }, []);

Additional Features to add to OrgManagement?

//   const handleEditOrg = (orgId, updateOrgData) => {}

//   const handleDeleteOrg = (orgId, deleteOrgData) => {}

//   const handleAddOrg = () => {}

//   handle Donations to Organization

//   const trackDonations = (orgId) => {}
*/