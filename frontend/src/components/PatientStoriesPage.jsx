import '../styles/PatientStoriesPage.scss';
import TopNavigation from '../components/TopNavigation';
import OrganizationCard from '../components/OrganizationCard';

const PatientStoriesPage = ({ orgData }) => {
  return (
    <div className="patient-stories">
      <TopNavigation />
      <h2>Patient Stories</h2>
      <OrganizationCard />
    </div>
  );
}

export default PatientStoriesPage;


// Remove OrganizationCard and enter paste the following after API request:
// {orgData.map(org => (
//   <OrganizationCard key={org.id} organization={org} />
// ))}