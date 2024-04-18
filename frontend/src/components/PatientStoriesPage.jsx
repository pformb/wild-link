import '../styles/PatientStoriesPage.scss';
import OrganizationCard from '../components/OrganizationCard';
import useAllOrganizations from '../hooks/useAllOrganizations';

const PatientStoriesPage = () => {
  
  const orgData = useAllOrganizations();
  

  return (
    <div className="patient-stories">
      <div className="organization-card-list">
        {orgData && orgData.map(org => (
          <OrganizationCard key={org.id} {...org} />
        ))}
      </div>
    </div>
  );
}

export default PatientStoriesPage;
