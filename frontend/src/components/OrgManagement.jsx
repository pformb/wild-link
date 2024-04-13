import React from 'react';
//import { useApplicationData } from '../hooks/useApplicationData.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/OrgManagement.scss';

const OrgManagement = () => {
  //Org specific states
  const [organization_name, setOrgName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [orgData, setOrgData] = useState([]); //unsure yet if this is needed
  
//fetch specific organization data to render Admin Dashboard
  // useEffect(() => {
  //   fetch('/api/organizations/${orgId}')
  //     .then(response => response.json())
  //     .then(data => setOrgData(data));
  // }, []);

    //handle Edit Organization Information
    //need to do some reseach on this
    const onHandleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const orgData = {
        organization_name: data.get('organization_name'),
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        email: data.get('email'),
        address: data.get('address'),
        phone_number: data.get('phone_number'),
        image: data.get('image'),
        password: data.get('password'),
        confirm_password: data.get('confirm_password')
      };
      fetch('/api/organizations/${orgId}/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orgData }),
      })
        .then(response => response.json())
        .then(data => setOrgData(data));
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
                    <input type="text" name="organization_name" value={organization_name} onChange={e => setOrgName(e.target.value) } />
                  </label>
                  <label>
                    First Name:
                    <input type="text" name="first_name" value={first_name} onChange={e => setFirstName(e.target.value) } />
                  </label>
                  <label>
                    Last Name:
                    <input type="text" name="last_name" value={last_name} onChange={e => setLastName(e.target.value) } />
                  </label>
                  <label>
                    Organization Email:
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                  <label>
                    Organization Address:
                    <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />
                  </label>
                  <label>
                    Organization Phone:
                    <input type="text" name="phone" value={phone_number} onChange={e => setPhoneNumber(e.target.value)}/>
                  </label>
                  <label>
                    Organization Image:
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} />
                  </label>
                  <label>
                    Organization Password:
                    <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <label>
                    Organization Confirm Password:
                    <input type="text" name="confirm_password" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
                  </label>
                  <button type="submit">Edit Organization Information</button>
                </form>
            </div>
          </div>
        </div>
        );
      };



export default OrgManagement;

/*

Additional Features to add to OrgManagement?

//   const handleEditOrg = (orgId, updateOrgData) => {}

//   const handleDeleteOrg = (orgId, deleteOrgData) => {}

//   const handleAddOrg = () => {}

//   handle Donations to Organization

//   const trackDonations = (orgId) => {}
*/