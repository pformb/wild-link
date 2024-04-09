import '../styles/PatientStoriesPage.scss';
import TopNavigation from '../components/TopNavigation';
import OrganizationCard from '../components/OrganizationCard';

const PatientStoriesPage = () => {
  return (
    <div className="patient-stories">
      <TopNavigation />
      <h2>Patient Stories</h2>
      <OrganizationCard />
    </div>
  );
}

export default PatientStoriesPage;