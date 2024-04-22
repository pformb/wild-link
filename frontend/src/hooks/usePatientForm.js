import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useNotification } from "../contexts/NotificationContext";

export const usePatientForm = () => {
  const { orgId, patientId } = useParams();
  const { notify } = useNotification();
  const navigate = useNavigate();
  const editForm = patientId && patientId !== "new";
  //Starting States
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

  const [isLoading, setIsLoading] = useState({status: false, context: ''});
  const [options, setOptions] = useState({
    speciesOptions: [],
    conditionOptions: [],
    treatmentOptions: [],
    ageRangeOptions: [],
  });

  useEffect(() => {
    // Only redirect if the context of loading is 'submitting'
    if (isLoading.status && isLoading.context === "submitting") {
      const timer = setTimeout(() => {
        navigate(`/organizations/${orgId}/patients`);
        setIsLoading({ status: false, context: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isLoading, navigate, orgId]);

  //useEffect to populate data
  useEffect(() => {
    const token = localStorage.getItem("token");
    //Checks which form to make correct api data request
    const endpoint = editForm
      ? `/api/organizations/${orgId}/patients/${patientId}/edit`
      : `/api/organizations/${orgId}/patients/new`;

    async function fetchData() {
      try {
        const response = await fetch(endpoint, { headers: { 'Authorization': `Bearer ${token}` }});
        const data = await response.json();
        //create select options
        setOptions({
          speciesOptions: data.allSpecies.map((species) => ({
            value: species.id,
            label: species.name,
            image: `/stock-photos/${species.image}`,
          })),
          conditionOptions: data.allConditions.map((condition) => ({
            value: condition.id,
            label: condition.condition_name,
          })),
          treatmentOptions: data.allTreatments.map((treatment) => ({
            value: treatment.id,
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
            patientConditions: data.patientConditions.map(cond => cond.condition_id),
            patientTreatments: data.patientTreatments.map(treat => treat.treatment_id),
          });
        }
      } catch (error) {
        console.error("Failed to fetch initial data:", error);
      }
    }

    fetchData();
  }, [orgId, patientId, editForm]);
  //tracks input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      patientDetails: {
        ...prevFormData.patientDetails, [name]: value,
      },
    }));
  };
  //tracks checkbox changes
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
  //tracks changes in single select drop downs
  const handleSelectChange = (selectedOption, actionMeta) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      patientDetails: {
        ...prevFormData.patientDetails,
        [actionMeta.name]: selectedOption ? selectedOption.value : "",
      },
    }));
  };
  //tracks changes in multi select drop downs
  const handleMultiSelectChange = (selectedOptions, { name }) => {
    const updatedOptions = selectedOptions.map((option) => option.value); // Capture only the values (IDs)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedOptions, // This should be an array of IDs
    }));
  };
  //validates form data required by db and patient story generation
  const validateForm = () => {
    const { patient_case, date_admitted, species_id, location_found, age_range_id } = formData.patientDetails;
    const conditionsValid = formData.patientConditions.length > 0;
    const treatmentsValid = formData.patientTreatments.length > 0;

    return patient_case && date_admitted && species_id && location_found && age_range_id && conditionsValid && treatmentsValid;
  };


  //handles story generation request
  const handleGenerateStory = async () => {
    const token = localStorage.getItem("token");
    if (!validateForm()) {
      notify({
        msg: "Please fill in all required fields and select at least one condition and one treatment.",
        type: "error",
      });
      return;
    }
    setIsLoading({status: true, context: "generating" });
    const { patientDetails, patientConditions, patientTreatments } = formData;
    //create arrays of patientCondition, patientTreatment, species, and age_range names instead of ids
    const conditionNames = patientConditions.map(id => 
        options.conditionOptions.find(option => option.value === id)?.label || ""
    );
    const treatmentNames = patientTreatments.map(id => 
        options.treatmentOptions.find(option => option.value === id)?.label || ""
    );
    const speciesName = options.speciesOptions.find(species => species.value === patientDetails.species_id)?.label || "Unknown Species";
    const ageRangeName = options.ageRangeOptions.find(range => range.value === patientDetails.age_range_id)?.label || "Unknown Age Range";

    const changedDetails = {
      ...patientDetails,
      species_name: speciesName,
      age_range: ageRangeName,
      story: undefined,
      species_id: undefined,
      age_range_id: undefined,
    };
    const storyRequestData = {
      patientDetails: changedDetails,
      patientConditions: conditionNames,
      patientTreatments: treatmentNames,
    };
    try {
        const response = await fetch("/api/generate-story", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(storyRequestData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Failed to generate story");

        setFormData(prevFormData => ({
            ...prevFormData,
            patientDetails: {
                ...prevFormData.patientDetails,
                story: data.story
            }
        }));
      notify({
        msg: "Story generated successfully!",
        type: "success",
      });
    } catch (error) {
        console.error("Error generating story:", error);
      notify({
        msg: error.toString(),
        type: "error",
      })
    } finally {
        setIsLoading({status: false, context: ""});
    }
  }

  //submits form to database
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm() || formData.patientDetails.story === "") {
      notify({
        msg: "Please fill in all required fields and select at least one condition and one treatment.",
        type: "error",
      });
      return;
    }

    setIsLoading({ status: true, context: "submitting" });
    const token = localStorage.getItem("token");

    const endpoint = editForm
      ? `/api/organizations/${orgId}/patients/${patientId}/edit`
      : `/api/organizations/${orgId}/patients/new`;
    const method = editForm ? "PATCH" : "POST";

    const { release_date, image, ...otherDetails } = formData.patientDetails;
    const updatedPatientDetails = {
      ...otherDetails,
      release_date: release_date === "" ? null : release_date, // Convert empty string to null
      image: image === "" ? null : image, // Convert empty string to null
    };
  
    const submittedData = {
      patientDetails: updatedPatientDetails,
      patientConditions: formData.patientConditions,
      patientTreatments: formData.patientTreatments,
    };

    if (
      Object.keys(submittedData.patientDetails).length === 0 &&
      submittedData.patientConditions.length === 0 &&
      submittedData.patientTreatments.length === 0) {
      return;
    }
    try {
      const response = await fetch(endpoint, {
        method: method,
        headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(submittedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit patient data");
      }

      notify({ 
        msg: "Patient Saved!",
        type: "success",
    });
    } catch (error) {
      console.error("Error submitting form:", error);
      notify({
        msg: `Error: ${error.message}`,
        type: "error"
      });
    }
  };

  return {
    editForm,
    formData,
    setFormData,
    handleSubmit,
    handleInputChange,
    handleCheckboxChange,
    handleSelectChange,
    handleMultiSelectChange,
    handleGenerateStory,
    isLoading,
    options,
  };
};