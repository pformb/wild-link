import React from "react";
import Select from 'react-select'
import { usePatientForm } from "../hooks/usePatientForm";

const PatientForm = () => {
  const { formData, handleSubmit, handleInputChange, handleCheckboxChange, handleSelectChange, handleMultiSelectChange, options } = usePatientForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>Case Number</label>
      <input
        type="text"
        name="patient_case"
        value={formData.patientDetails.patient_case}
        onChange={handleInputChange}
      />
      <label>Admission Date</label>
      <input
        type="date"
        name="date_admitted"
        value={formData.patientDetails.date_admitted}
        onChange={handleInputChange}
      />
      <label>Species</label>
      <Select
        options={options.speciesOptions}
        name="species_id"
        value={options.speciesOptions.find(
          (option) => option.value === formData.patientDetails.species_id
        )}
        onChange={handleSelectChange}
        isSearchable
      />
      <label>Find Location</label>
      <input
        type="text"
        name="location_found"
        value={formData.patientDetails.location_found}
        onChange={handleInputChange}
      />
      <label>Released</label>
      <input
        type="checkbox"
        name="is_released"
        checked={formData.patientDetails.is_released}
        onChange={handleCheckboxChange}
      />
      <label>Released Date</label>
      <input
        type="date"
        name="release_date"
        value={formData.patientDetails.release_date}
        onChange={handleInputChange}
      />
      <label>Age</label>
      <Select
        name="age_range_id"
        options={options.ageRangeOptions}
        value={options.ageRangeOptions.find(
          (option) => option.value === formData.patientDetails.age_range_id
        )}
        onChange={handleSelectChange}
      />
      <label>Conditions</label>
      <Select
        key={formData.patientConditions.length}
        name="patientConditions"
        options={options.conditionOptions}
        value={options.conditionOptions.filter((option) =>
          formData.patientConditions.includes(option.value)
        )}
        onChange={handleMultiSelectChange}
        isMulti
        isSearchable
        closeMenuOnSelect={false}
      />

      <label>Treatments</label>
      <Select
        name="patientTreatments"
        options={options.treatmentOptions}
        value={options.treatmentOptions.filter((option) =>
          formData.patientTreatments.includes(option.value)
        )}
        onChange={handleMultiSelectChange}
        isSearchable
        isMulti
        closeMenuOnSelect={false}
      />
      <img
        src={
          formData.patientDetails.image ||
          options.speciesOptions.find(
            (option) => option.value === formData.patientDetails.species_id
          )?.image ||
          ""
        }
        alt="Select Species for Default"
        style={{ width: 200, height: 200 }}
      />
      <input
        type="text"
        name="image"
        value={formData.patientDetails.image}
        onChange={handleInputChange}
        placeholder="Enter image URL"
      />
      <label>Patient Story</label>
      <input
        type="text"
        name="story"
        value={formData.patientDetails.story}
        onChange={handleInputChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default PatientForm;
