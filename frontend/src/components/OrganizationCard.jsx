import '../styles/OrganizationCard.scss';


const OrganizationCard = () => {
  return (
    <div className="organization-card">
      <img 
      className="organization-prof-pic" 
      src="/mock-organization-prof-pic.png" 
      alt="home" />
      <h2 className="organization-name">Organization Name</h2>
      <p className="organization-location">Organization Location</p>
      <p className="organization-website">Organization Website</p>
      <button className="btn-view-org">View</button>
      
    </div>
  );
}

export default OrganizationCard;