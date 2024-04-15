import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const usePatientForm = () => {
  const { orgId, patientId } = useParams();
  const editForm = patientId && patientId !== "new";

  const [formData, setFormData] = useState({
    patientDetails: {
    organization_id: orgId,
    patient_case: "",
    date_admitted: "",
    species_id: "",
    location_found: "",
    is_released: false,
    release_date: "",
    image: "", //image user provides
    imageUrl: "", //To display image on form
    story: "",
    age_range_id: "", 
    },
    patientConditions: [],
    patientTreatments: [],
  });
  const [originalData, setOriginalData] = useState({});

  const [options, setOptions] = useState({
    speciesOptions: [],
    conditionOptions: [],
    treatmentOptions: [],
    ageRangeOptions: [],
  });

  useEffect(() => {
    const endpoint = editForm
      ? `/api/organizations/${orgId}/patients/${patientId}/edit`
      : `/api/organizations/${orgId}/patients/new`;

    async function fetchData() {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        setOptions({
          speciesOptions: data.allSpecies.map((species) => ({
            value: species.id,
            label: species.name,
            image: `/stock-photos/${species.image}`,
          })),
          conditionOptions: data.allConditions.map((condition) => ({
            value: String(condition.id),
            label: condition.condition_name,
          })),
          treatmentOptions: data.allTreatments.map((treatment) => ({
            value: String(treatment.id),
            label: treatment.treatment_name,
          })),
          ageRangeOptions: data.allAgeRanges.map((ageRange) => ({
            value: ageRange.id,
            label: ageRange.range_name,
          })),
        });

        if (editForm && data.patientDetails && data.patientDetails.length > 0) {
          const patient = data.patientDetails[0];
          //IF EDIT FORM POPULATE INPUTS WITH PATIENT DATA
          setFormData({
            patientDetails: {
            organization_id: orgId,
            species_id: patient.species_id,
            age_range_id: patient.age_range_id,
            patient_case: patient.patient_case,
            location_found: patient.location_found,
            date_admitted: patient.date_admitted,
            release_date: patient.release_date || "",
            is_released: patient.is_released,
            story: patient.story,
            image: patient.image || "",
            },
            patientConditions: data.patientConditions.map(cond => String(cond.condition_id)), // Convert to string
            patientTreatments: data.patientTreatments.map(treat => String(treat.treatment_id)), // Convert to string
          });
          //TO BE USED TO CHECK FOR CHANGES UPON SUBMIT
          setOriginalData({
            patientDetails: {
            species_id: patient.species_id,
            age_range_id: patient.age_range_id,
            patient_case: patient.patient_case,
            location_found: patient.location_found,
            date_admitted: patient.date_admitted,
            release_date: patient.release_date || "",
            is_released: patient.is_released,
            story: patient.story,
            image: patient.image,
            },
            patientConditions: data.patientConditions.map(cond => String(cond.condition_id)), // Convert ID to string if necessary
            patientTreatments: data.patientTreatments.map(treat => String(treat.treatment_id)), // Same conversion
          });
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    }

    fetchData();
  }, [orgId, patientId, editForm]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      patientDetails: {
        ...prevFormData.patientDetails, [name]: value,
      },
    }));
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      patientDetails: {
        ...prevFormData.patientDetails,
        [name]: checked, 
      },
    }));
  };

  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      patientDetails: {
        ...prevFormData.patientDetails,
        [actionMeta.name]: selectedOption ? selectedOption.value : "",
      },
    }));
  };

const handleMultiSelectChange = (selectedOptions, { name }) => {
  const updatedOptions = selectedOptions.map((option) => option.value); // Capture only the values (IDs)
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: updatedOptions, // This should be an array of IDs
  }));
};


  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = editForm
      ? `/api/organizations/${orgId}/patients/${patientId}/edit`
      : `/api/organizations/${orgId}/patients/new`;
    const method = editForm ? "PATCH" : "POST";
    const submittedData = {
      patientDetails: formData.patientDetails,
      patientConditions: formData.patientConditions.map(id => ({ condition_id: id })),  // Format as array of objects
      patientTreatments: formData.patientTreatments.map(id => ({ treatment_id: id })),  // Format as array of objects
    };
    console.log("Submitting:", submittedData); // See what's being submitted

    if (
      Object.keys(submittedData.patientDetails).length === 0 &&
      submittedData.patientConditions.length === 0 &&
      submittedData.patientTreatments.length === 0) {
      console.log("No changes detected, no submission needed.");
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submittedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit patient data");
      }

      const result = await response.json();
      alert(`Success: ${result.message}`);
      console.log(result);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit form");
    }
  };

  return {
    formData,
    setFormData,
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
    handleSelectChange,
    handleMultiSelectChange,
    options,
  };
};

