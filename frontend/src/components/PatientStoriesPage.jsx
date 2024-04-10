import '../styles/PatientStoriesPage.scss';
import TopNavigation from '../components/TopNavigation';
import OrganizationCard from '../components/OrganizationCard';


const organizations = [
  {  id: 1, 
    name: 'John', 
    website: 'http://google.com', 
    location: 'victoria', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  id: 2, 
    name: 'James', 
    website: 'http://apple.com', 
    location: 'vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  id: 3, 
    name: 'Mike', 
    website: 'http://apple.com', 
    location: 'vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  id: 4, 
    name: 'Matt', 
    website: 'http://apple.com', 
    location: 'vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  id: 5, 
    name: 'Jason', 
    website: 'http://apple.com', 
    location: 'vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  id: 6, 
    name: 'Randy', 
    website: 'http://apple.com', 
    location: 'vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  
]

const PatientStoriesPage = ({ orgData }) => {
  return (
    <div className="patient-stories">
      <TopNavigation />
      {organizations.map(org => (
      <OrganizationCard key={org.id} {...org} />
      ))}

      {/* <OrganizationCard /> */}
    </div>
  );
}

export default PatientStoriesPage;


// Remove OrganizationCard and enter paste the following after API request:
// {orgData.map(org => (
//   <OrganizationCard key={org.id} organization={org} />
// ))}