import { useApplicationData } from '../src/hooks/useApplicationData.js';
import HomeRoute from './routes/HomeRoute';
import './App.css';

function App() {
  const { 
    returnHome
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute 
      returnHome={returnHome}
      />
    </div>
  );
}

export default App;
