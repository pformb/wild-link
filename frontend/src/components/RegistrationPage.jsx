
import React, { useState } from 'react';
import  '../styles/RegistrationPage.scss';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
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

    fetch('http://localhost:3001/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Registration failed');
      }
    // Check if the response is JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.indexOf('application/json') !== -1) {
      return response.json();
    } else {
      return response.text();
    }
  })
    //   return response.json();
    // })
    .then(data => {
      console.log('Registration successful', data);
      navigate('/home');
    })
    .catch(error => {
      console.error('Error:', error);
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

//Very dead code below
  //form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       console.log('Passwords do not match');
//       alert('Passwords do not match');
//       return;
//     }

//     try {
//        const response = await fetch('http://localhost:3001/api/register', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//             body: JSON.stringify({
//                userData: {
//                 firstName,
//                 lastName,
//                 address,
//                 email,
//                 password
//               }
//            })
//         });

//         if (!response.ok) {
//           console.log('Registration failed. Please try again.');
//           throw new Error('Regestration failed. Please try again.');
//         }

//         const data = await response.json();


//     if (data.userExists) {
//       console.log('User already exists');
//       alert('User already exists');
//       return;
//     }
//     //clear form fields on successfull registration
//     setFirstName('');
//     setLastName('');
//     setEmail('');
//     setAddress('');
//     setPassword('');
//     setConfirmPassword('');

//     alert(`You have sucessfully registered. Please login to continue! `);
//     navigate('/home');
//   } catch (error) {
//     alert('Registration failed. Please try again.');
//   }
// }

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  
  //   if (password !== confirmPassword) {
  //     alert('Passwords do not match');
  //     return;
  //   }
  
  //   const userData = {
  //     firstName,
  //     lastName,
  //     email,
  //     address,
  //     password,
  //   };

  //   try {
  //     const response = await fetch('http://localhost:3001/api/register', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(userData),
  //     });
  
  //     const data = await response.json();

  //     if (data.userExists) {
  //             console.log('User already exists');
  //             alert('User already exists');
  //             return;
  //           }
  //           //clear form fields on successfull registration
  //           setFirstName('');
  //           setLastName('');
  //           setEmail('');
  //           setAddress('');
  //           setPassword('');
  //           setConfirmPassword('');
        
  //           alert(`You have sucessfully registered. Please login to continue! `);
  //           navigate('/home');

  //   } catch (error) {
  //     alert('Registration failed. Please try again.');
  //   }
  //  };