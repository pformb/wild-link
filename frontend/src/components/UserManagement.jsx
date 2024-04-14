import React from 'react';
//import { useApplicationData } from '../hooks/useApplicationData.js';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/UserManagement.scss';

const UserManagement = () => {
  //Org specific states
  // const [user_name, setOrgName] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone_number, setPhoneNumber] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirmPassword] = useState('');
  const [userData, setUserData] = useState([]); //unsure yet if this is needed
  
  //Donation Card specific states
  // const [donation, setDonation] = useState([]);

//fetch specific user data to render Admin Dashboard
  // useEffect(() => {
  //   fetch('/api/users/${orgId}')
  //     .then(response => response.json())
  //     .then(data => setUserData(data));
  // }, []);

    //handle Edit user Information
    //need to do some reseach on this
    const onHandleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.target);
      const userData = {
        // user_name: data.get('user_name'),
        first_name: data.get('first_name'),
        last_name: data.get('last_name'),
        email: data.get('email'),
        address: data.get('address'),
        phone_number: data.get('phone_number'),
        image: data.get('image'),
        password: data.get('password'),
        confirm_password: data.get('confirm_password')
      };
      fetch('/api/users/${userId}/profile', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
      })
        .then(response => response.json())
        .then(data => setUserData(data));
        };
        return (
          <div className="UserManagement
        ">
            <h1>User Dashboard</h1>
      
            <h2>User Information</h2>
              <div className="user-mgmt">
                <div className="user-mgmt__content">
              <form onSubmit={onHandleSubmit}>
                  {/* <label>
                    user Name:
                    <input type="text" name="user_name" value={user_name} onChange={e => setOrgName(e.target.value) } />
                  </label> */}
                  <label>
                    First Name:
                    <input type="text" name="first_name" value={first_name} onChange={e => setFirstName(e.target.value) } />
                  </label>
                  <label>
                    Last Name:
                    <input type="text" name="last_name" value={last_name} onChange={e => setLastName(e.target.value) } />
                  </label>
                  <label>
                   Email:
                    <input type="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                  </label>
                  <label>
                    Address:
                    <input type="text" name="address" value={address} onChange={e => setAddress(e.target.value)} />
                  </label>
                  <label>
                    Phone:
                    <input type="text" name="phone" value={phone_number} onChange={e => setPhoneNumber(e.target.value)}/>
                  </label>
                  <label>
                    Image:
                    <input type="text" name="image" value={image} onChange={e => setImage(e.target.value)} />
                  </label>
                  <label>
                    Password:
                    <input type="text" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                  </label>
                  <label>
                    Confirm Password:
                    <input type="text" name="confirm_password" value={confirm_password} onChange={e => setConfirmPassword(e.target.value)} />
                  </label>
                  <button type="submit">Edit User Information</button>
                </form>
            </div>
          </div>
        </div>
        );
      };



export default UserManagement;

/*

Additional Features to add to UserManagement?

//   const handleEditOrg = (orgId, updateuserData) => {}

//   const handleDeleteOrg = (orgId, deleteuserData) => {}

//   const handleAddOrg = () => {}

//   handle Donations to user

//   const trackDonations = (orgId) => {}


Donations to user as a Modal
- Track donations to the logged in user
- View specific donation to the logged user, when clicking a donation, a modal will pop up with the donation details, and a close button

might need to make a new component for this

const DonationsModal = ({ donations }) => {
  return (
    <div className="DonationsModal">
      <h2>Donations</h2>
      <ul>
        {donations.map((donation) => (
          <li key={donation.id}>
            <p>Donation ID: {donation.id}</p>
            <p>Donor: {donation.donor}</p>
            <p>Case Number: {donation.caseNumber}</p>
            <p>Amount: {donation.amount}</p>
            <p>Date: {donation.date}</p>
            <img src={donation.photo} alt="Donation" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationsModal;

*/