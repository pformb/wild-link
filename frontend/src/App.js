import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginRoute from './routes/LoginRoute';

function App() {
  return (
    <Router>   
     <div className="App">
      {/* Route exact path="/" component={Home} */}
      {/* route to home which we will build all other routes from */}
      <Route path="/login" component={LoginRoute} />
          {/* <LoginRoute /> */}
      </div>
  </Router>
  );
}

export default App;
