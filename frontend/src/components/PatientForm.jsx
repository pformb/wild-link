import React from "react";
import Select from 'react-select'
import { usePatientForm } from "../hooks/usePatientForm";

const PatientForm = () => {
  const { formData, handleSubmit, handleInputChange, handleCheckboxChange, handleSelectChange, handleMultiSelectChange, handleGenerateStory, isLoading, options } = usePatientForm();

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Case Number
        <input
          type="text"
          name="patient_case"
          value={formData.patientDetails.patient_case}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Admission Date
        <input
          type="date"
          name="date_admitted"
          value={formData.patientDetails.date_admitted}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Species
        <Select
          options={options.speciesOptions}
          name="species_id"
          value={options.speciesOptions.find(
            (option) => option.value === formData.patientDetails.species_id
          )}
          onChange={handleSelectChange}
          isSearchable
        />
      </label>
      <label>
        Find Location
        <input
          type="text"
          name="location_found"
          value={formData.patientDetails.location_found}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Released
        <input
          type="checkbox"
          name="is_released"
          checked={formData.patientDetails.is_released}
          onChange={handleCheckboxChange}
        />
      </label>
      <label>
        Released Date
        <input
          type="date"
          name="release_date"
          value={formData.patientDetails.release_date}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Age
        <Select
          name="age_range_id"
          options={options.ageRangeOptions}
          value={options.ageRangeOptions.find(
            (option) => option.value === formData.patientDetails.age_range_id
          )}
          onChange={handleSelectChange}
        />
      </label>
      <label>
        Conditions
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
        />
      </label>
      <label>
        Treatments
        <Select
          name="patientTreatments"
          options={options.treatmentOptions}
          value={options.treatmentOptions.filter((option) =>
            formData.patientTreatments.includes(option.value)
          )}
          onChange={handleMultiSelectChange}
          isSearchable
          isMulti
        />
      </label>
      <label>
        Animal Photo
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
      </label>
      <label>
        Patient Story
        <button type="button" onClick={handleGenerateStory} disabled={isLoading}>
          Generate Story
        </button>
        <input
          type="text"
          name="story"
          value={isLoading ? "Generating Story... Please Wait" : formData.patientDetails.story}
          disabled={isLoading}
          onChange={handleInputChange}
        />
      </label>
      <input type="submit" value="Save Patient" />
    </form>
  );
};

export default PatientForm;
