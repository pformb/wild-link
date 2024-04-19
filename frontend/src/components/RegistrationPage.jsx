
import React, { useState } from 'react';
import  '../styles/RegistrationPage.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = ({setLoggedIn}) => {
  //redirect url
  const navigate = useNavigate();

  //manage user data in state
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userData = {
      first_name,
      last_name,
      email,
      address,
      password,
    };

    fetch("http://localhost:3001/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          console.log("Response not OK:", response);
          throw new Error("Registration failed");
        }
        return response.json();
      })
      .then((data) => {
        if (data.message === "User Created") {
          console.log("Registration successful", data);
          setLoggedIn(true);
          navigate("/home");
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Registration Error:", error);
      });
};

  return (
    <div className="registration-page">
     <div className="registration-page__content">
      <h1>Please Register Here to Continue</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" value={first_name} onChange={e => setFirstName(e.target.value)}/>
        <input type="text" placeholder="Last Name" value={last_name} onChange={e => setLastName(e.target.value)}/>
        <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="text" placeholder="Address" value={address} onChange={e=> setAddress(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}  />
        <button type="submit">Register</button>
      </form>
    </div>
  </div>
  );
}

export default RegistrationPage;