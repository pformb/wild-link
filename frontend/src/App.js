import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import './App.css';

function App() {
  const { 
    returnHome,
    fetchLogin
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      returnHome={returnHome}
      fetchLogin={fetchLogin}
      />
    </div>
  );
}

export default App;
