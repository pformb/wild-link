import '../styles/PatientCard.scss';


const PatientCard = ({ id, name, location_found, image_url, condition_name, treatment_name, treatment_cost, age_range, date_admitted, is_released }) => {
  return (
    <div className="patient-card">
      <div className="patient-content">
        <img 
          className="patient-prof-pic" 
          src={image_url} 
          alt={name} />
          <h2 className="patient-name">{name}</h2>
        <div className="patient-details">
          <p className="patient-location">Location Found: {location_found}</p>
          <p className="patient-condition">Condition: {condition_name}</p>
          <p className="patient-treatment">Treatment: {treatment_name}</p>
          <p className="patient-cost">Treatment Cost: ${treatment_cost}</p>
          <p className="patient-age">Age Range: {age_range}</p>
          <p className="patient-admitted">Date Admitted: {date_admitted}</p>
          <p className="patient-status">Status: {is_released ? 'Released' : 'Admitted'}</p>
          <button className="btn-view-pat">View</button>
        </div>
      </div>
    </div>
  );
}

export default PatientCard;


