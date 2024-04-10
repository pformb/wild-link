import React, { useState } from 'react';
import  '../styles/LoginPage.scss';

//mock user data
let users = [
  { username: 'user1', password: 'pas$word1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' }
];

const LoginPage = () => {
  //manage user data in state
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    let userExists = users.find(user => user.username === username && user.password === password);

    if (!userExists) {
      alert('Invalid username or password');
      return;
    }
    
    alert(`Welcome back, ${username}!`);
  }

  return (
    <div className="login-page">
      <h1>Login</h1>
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
  );
}

export default LoginPage;