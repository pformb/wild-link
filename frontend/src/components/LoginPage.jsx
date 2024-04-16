import React, { useState } from 'react';
import  '../styles/LoginPage.scss';
import { useNavigate } from 'react-router-dom';

//https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430#:~:text=It%20provides%20a%20declarative%20API,the%20useHistory%20and%20useLocation%20hooks.

//https://jessywlee.medium.com/apply-http-post-method-and-fetch-function-to-user-login-js-react-d74a2c19ab7d

const LoginPage = ({ setLoggedIn, setUserType, orgId, setOrgId }) => {
  
//redirect url
const navigate = useNavigate();

  //manage user data in state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //form submission
  const handleSubmit =  async(e) => {
    e.preventDefault();
  
    const loginData = {email, password};
  
    try {
      const response = await fetch('http://localhost:3001/api/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
      });
  
      if (!response.ok) {
        console.log('Response not OK:', response);
        throw new Error('Invalid email or password');
      }
  
// Check if the response is JSON
const contentType = response.headers.get('content-type');
if (contentType && contentType.indexOf('application/json') !== -1) {
  const data = await response.json();
  console.log('Received:', data);
  if (data.success) {
    // Login successful
    setLoggedIn(true);
    setUserType(data.userType);
      if (data.userType === 'organization') {
        setOrgId(data.orgId); // Set orgId here
      }
    alert(`Welcome back, ${data.first_name}!`);
    navigate('/home');
  } else {
    // Login failed
    alert(data.message);
  }
} else {
  const data = await response.text();
  console.log('Received:', data);
  alert(data);
  navigate('/home');
}
} catch (error) {
console.error('Error:', error);
alert('Invalid email or password');
}
};
  return (
    <div className="login-page">
        <div className="login-page__content">
          <h1>Please Login Here to Continue</h1>
          </div>
           <div className="login-form">
              <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="email"
                name="email"
                  />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)} 
                id="password"
                name="password"
                />
                <button type="submit">Login</button>
            </form>
          </div>
    </div>
  );
}

export default LoginPage;