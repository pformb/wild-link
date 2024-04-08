import HomePage from '../components/HomePage';
import TopNavigation from '../components/TopNavigation';


const HomeRoute = (props) => {
  const { returnHome } = props;

  return (
    <div className="home-route">
      <TopNavigation returnHome={returnHome} />
      <HomePage />
    </div>
  );
};

export default HomeRoute;

