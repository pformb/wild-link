
import React, { useState } from 'react';
import  '../styles/RegistrationPage.scss';


//mock user data
let users = [];

const RegistrationPage = () => {
  //manage user data in state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Fetch req ready to be implemented

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    let error.message = 'Registration Failure: This user already exists in our system, please try again';

    try {
       const response = await fetch('http://localhost:3001/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
          throw new Error('error.message');
        }

        const data = await response.json();

        alert(`You have sucessfully registered. Welcome to Wild Link!`);
    } catch (error) {
        alert(error.message);
    }

    */
    
    let userExists = users.find(user => user.username === username);

    if (userExists) {
      alert('User already exists');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    //add user to users array
    users.push({ username, password });

    //clear form fields
    setUsername('');
    setPassword('');
    setConfirmPassword('');

    alert(`You have sucessfully registered. Welcome to Wild Link! `);
  }

  return (
    <div className="registration-page">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationPage;