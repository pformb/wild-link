
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