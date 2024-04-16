import '../styles/PatientsListPage.scss';
import PatientCard from '../components/PatientCard';


const patients = [
  { 
    id: 1,
    organization_id: 1,
    name: 'Dodo', 
    scientific_name: 'Bird', 
    description: 'Dodo was picked up after getting hit by a car', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Broken foot',
    treatment_name: 'Small cast and rest time',
    treatment_cost: 2000,
    age_range: 'Juvenile',
    location_found: 'Victoria',
    date_admitted: '2024-03-01',
    is_released: false,
  },
  { 
    id: 2, 
    organization_id: 1,
    name: 'Fluffy', 
    scientific_name: 'Cat', 
    description: 'Fluffy was rescued from a tree', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Broken leg',
    treatment_name: 'Surgery and rehabilitation',
    treatment_cost: 3500,
    age_range: 'Adult',
    location_found: 'City Park',
    date_admitted: '2024-03-05',
    is_released: true,
  },
  { 
    id: 3, 
    organization_id: 1,
    name: 'Max', 
    scientific_name: 'Dog', 
    description: 'Max was found abandoned on the street', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Malnutrition',
    treatment_name: 'Nutritional therapy',
    treatment_cost: 1000,
    age_range: 'Senior',
    location_found: 'Suburban Area',
    date_admitted: '2024-03-10',
    is_released: true,
  },
  { 
    id: 4, 
    organization_id: 2,
    name: 'Tweety', 
    scientific_name: 'Bird', 
    description: 'Tweety fell from its nest', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Bruised wing',
    treatment_name: 'Rest and gentle handling',
    treatment_cost: 500,
    age_range: 'Juvenile',
    location_found: 'Backyard',
    date_admitted: '2024-03-15',
    is_released: true,
  },
  { 
    id: 5, 
    organization_id: 2,
    name: 'Whiskers', 
    scientific_name: 'Cat', 
    description: 'Whiskers was abandoned in a box', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Respiratory infection',
    treatment_name: 'Antibiotics and isolation',
    treatment_cost: 1500,
    age_range: 'Young Adult',
    location_found: 'Alley',
    date_admitted: '2024-03-20',
    is_released: false,
  },
  { 
    id: 6, 
    organization_id: 2,
    name: 'Buddy', 
    scientific_name: 'Dog', 
    description: 'Buddy was hit by a bike', 
    image_url: '/mock-organization-prof-pic.png',
    condition_name: 'Fractured leg',
    treatment_name: 'Surgery and physiotherapy',
    treatment_cost: 3000,
    age_range: 'Adult',
    location_found: 'Street',
    date_admitted: '2024-03-25',
    is_released: false,
  }
];

const PatientsListPage = ({ orgData }) => {
  return (
    <div className="patients-list">
      <div className="patients-list-page">
      {patients.map(pat => (
      <PatientCard key={pat.id} {...pat} />
      ))}

      {/* <OrganizationCard /> */}
      </div>
    </div>
  );
}

export default PatientsListPage;