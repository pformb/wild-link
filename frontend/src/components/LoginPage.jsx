import React, { useState } from 'react';
import  '../styles/LoginPage.scss';
import { useNavigate } from 'react-router-dom';

//https://medium.com/@bobjunior542/using-usenavigate-in-react-router-6-a-complete-guide-46f51403f430#:~:text=It%20provides%20a%20declarative%20API,the%20useHistory%20and%20useLocation%20hooks.

//mock user data
let users = [
  { username: 'user1', password: 'pas$word1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

const LoginPage = ({setLoggedIn }) => {
//redirect url
const navigate = useNavigate();

  //manage user data in state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    /* Fetch req ready to be implemented 

    let error.message = 'Login Failure: Invalid username or, password';

    try {
      const response = await fetch('http://localhost:3001/login', { 
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      });

      if (!response.ok) {
        throw new Error('error.message');

        const data = await response.json();

        alert(`Welcome back, ${data.username}!`);
      }catch (error) {
        alert(error.message);
  }
 */


    let userExists = users.find(user => user.username === username && user.password === password);

    if (!userExists) {
      alert('Invalid username or password');
      return;
    }
    
    setLoggedIn(true);
    setUsername(username) 
    alert(`Welcome back, ${username}!`);
    navigate('/home');
  }

  return (
    <div className="login-page">
        <div className="login-page__content">
          <h1>Please Login Here to Continue</h1>
          </div>
           <div className="login-form">
              <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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