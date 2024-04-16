import '../styles/PatientStoriesPage.scss';
import OrganizationCard from '../components/OrganizationCard';


const organizations = [
  {  
    id: 1, 
    name: 'Wildlife Haven Sanctuary', 
    website: 'http://wildlifehaven.com', 
    location: 'Victoria', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  
    id: 2, 
    name: 'EcoLife Wildlife Refuge', 
    website: 'http://ecolife-refuge.com', 
    location: 'Vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  
    id: 3, 
    name: 'Natures Ark Sanctuary', 
    website: 'http://naturesark-sanctuary.com', 
    location: 'Vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  
    id: 4, 
    name: 'Wilderness Foundation', 
    website: 'http://wilderness-sanctuary.org', 
    location: 'Vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  
    id: 5, 
    name: 'Wildlife Oasis Sanctuary', 
    website: 'http://wildlife-oasis.com', 
    location: 'Vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
  {  
    id: 6, 
    name: 'Green Earth Wildlife Haven', 
    website: 'http://greenearth-haven.com', 
    location: 'Vancouver', 
    profile_pic: '/mock-organization-prof-pic.png'
  },
];


const PatientStoriesPage = ({ orgData }) => {
  return (
    <div className="patient-stories">

      <div className="organization-card-list">
      {organizations.map(org => (
      <OrganizationCard key={org.id} {...org} />
      ))}
      </div>
  
    </div>
  );
}

export default PatientStoriesPage;


// Remove OrganizationCard and enter paste the following after API request:
// {orgData.map(org => (
//   <OrganizationCard key={org.id} organization={org} />
// ))}