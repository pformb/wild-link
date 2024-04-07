import React from 'react';
// import { BrowserRouter as Router, Route} from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginRoute from './routes/LoginRoute';

//troubleshooting with https://www.syncfusion.com/blogs/post/react-router-vs-react-router-dom

function App() {
  return (
    <BrowserRouter />
    <Routes>   
     <div className="App">
      {/* Route exact path="/" component={Home} */}
      {/* route to home which we will build all other routes from */}
      <Route path="/login" component={LoginRoute} />
          {/* <LoginRoute /> */}
      </div>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
