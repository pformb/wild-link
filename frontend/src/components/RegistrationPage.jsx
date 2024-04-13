
import React, { useState } from 'react';
import  '../styles/RegistrationPage.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
  //redirect url
  const navigate = useNavigate();

  //manage user data in state
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      alert('Passwords do not match');
      return;
    }

    try {
       const response = await fetch('http://localhost:3001/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
            body: JSON.stringify({
               userData: {
                first_name: firstName,
                last_name: lastName,
                address: address,
                email: email,
                password: password
              }
           })
        });

        if (!response.ok) {
          console.log('Registration failed. Please try again.');
          throw new Error('Regestration failed. Please try again.');
        }

        const data = await response.json();


    if (data.userExists) {
      console.log('User already exists');
      alert('User already exists');
      return;
    }
    //clear form fields on successfull registration
    setFirstName('');
    setLastName('');
    setEmail('');
    setAddress('');
    setPassword('');
    setConfirmPassword('');

    alert(`You have sucessfully registered. Please login to continue! `);
    navigate('/home');
  } catch (error) {
    alert('Registration failed. Please try again.');
  }
}

  return (
    <div className="registration-page">
     <div className="registration-page__content">
      <h1>Please Register Here to Continue</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name"/>
        <input type="text" placeholder="Last Name"/>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Address"/>
        <input type="password" placeholder="Password"/>
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  );
}

export default RegistrationPage;