import React, { useState } from 'react';
import  '../styles/LoginPage.scss';
import { useNavigate } from 'react-router-dom';

//https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430#:~:text=It%20provides%20a%20declarative%20API,the%20useHistory%20and%20useLocation%20hooks.

//https://jessywlee.medium.com/apply-http-post-method-and-fetch-function-to-user-login-js-react-d74a2c19ab7d

const LoginPage = ({setLoggedIn }) => {
//redirect url
const navigate = useNavigate();

  //manage user data in state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //form submission
  const handleSubmit =  async(e) => {
    e.preventDefault();

    // Fetch req ready to be implemented 

    try {
      const response = await fetch('http://localhost:3001/login', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

        const data = await response.json();
        setLoggedIn(true);
        alert(`Welcome back, ${data.first_name}!`);
        navigate('/home');
      }catch (error) {
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
                onChange={(e) => setEmail(e.target.value)}
                  />
                <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
          </div>
    </div>
  );
}

export default LoginPage;