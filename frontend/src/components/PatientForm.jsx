import React from "react";
import Select from 'react-select'
import { Navigate } from "react-router-dom";
import { usePatientForm } from "../hooks/usePatientForm";
import { useAuth } from "../contexts/AuthContext";
import {TextField, Checkbox, Grid, Box, Button, Typography, CircularProgress } from "@mui/material"
import makeAnimated from 'react-select/animated';
import customSelectStyles from "../styles/selectStyles";

const PatientForm = () => {
  const { editForm, formData, handleSubmit, handleInputChange, handleCheckboxChange, handleSelectChange, handleMultiSelectChange, handleGenerateStory, isLoading, options } = usePatientForm();
  const animatedComponents = makeAnimated();
  const { user } = useAuth();

  if (!user || user.role !== "organizations") {
    // Redirect them to the home page
    return <Navigate to="/home" replace />;
  }

  return (
    <Box
      sx={{
        width: "100%",
        opacity: isLoading.status ? 0.5 : 1,
        pointerEvents: isLoading.status ? "none" : "auto",
      }}
    >
      <Typography variant="h3" align="left" sx={{ mt: 4, mb: 4, ml: 10 }}>
        {editForm ? "Edit Patient" : "Create a new Patient"}
      </Typography>

      <Box sx={{ width: "80%", mx: "auto", boxShadow: 3, p: 3 }}>
        <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={2}
            sx={{ "& > .MuiGrid-item": { padding: 2 } }}
          >
            <Grid item xs={12} md={6} container>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Case Number</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="text"
                  name="patient_case"
                  value={formData.patientDetails.patient_case}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Admission Date</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="date"
                  name="date_admitted"
                  value={formData.patientDetails.date_admitted}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} container>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Find Location</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="text"
                  name="location_found"
                  value={formData.patientDetails.location_found}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Species</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select
                  styles={customSelectStyles}
                  components={animatedComponents}
                  options={options.speciesOptions}
                  name="species_id"
                  value={options.speciesOptions.find(
                    (option) =>
                      option.value === formData.patientDetails.species_id
                  )}
                  onChange={handleSelectChange}
                  isSearchable
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6} container>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Age</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select
                  styles={customSelectStyles}
                  name="age_range_id"
                  options={options.ageRangeOptions}
                  value={options.ageRangeOptions.find(
                    (option) =>
                      option.value === formData.patientDetails.age_range_id
                  )}
                  components={animatedComponents}
                  onChange={handleSelectChange}
                />
              </Grid>
              <Grid item xs={12} alignItems="center" container>
                <Grid item xs={false} sm={1} />
                <Grid
                  item
                  xs={12}
                  sm={9}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography sx={{ mr: 1, mb: 0 }}>Released</Typography>
                  <Checkbox
                    name="is_released"
                    checked={formData.patientDetails.is_released}
                    onChange={handleCheckboxChange}
                    size="large"
                    sx={{ paddingLeft: 4 }}
                  />
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Release Date</Typography>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  type="date"
                  name="release_date"
                  value={formData.patientDetails.release_date}
                  onChange={handleInputChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Conditions</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select
                  styles={customSelectStyles}
                  components={animatedComponents}
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
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{ pt: 2 }}>Treatments</Typography>
              </Grid>
              <Grid item xs={9}>
                <Select
                  styles={customSelectStyles}
                  components={animatedComponents}
                  name="patientTreatments"
                  options={options.treatmentOptions}
                  value={options.treatmentOptions.filter((option) =>
                    formData.patientTreatments.includes(option.value)
                  )}
                  onChange={handleMultiSelectChange}
                  isSearchable
                  isMulti
                />
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={{ pt: 2 }}>Patient Image</Typography>
              <img
                src={
                  formData.patientDetails.image ||
                  options.speciesOptions.find(
                    (option) =>
                      option.value === formData.patientDetails.species_id
                  )?.image ||
                  ""
                }
                alt="Select Species for Default"
                style={{ width: "auto", maxHeight: 225, marginBottom: "20px" }}
              />
              <TextField
                fullWidth
                label="Image URL"
                type="text"
                name="image"
                value={formData.patientDetails.image}
                onChange={handleInputChange}
                placeholder="Enter image URL"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ pt: 2 }}>Patient Story</Typography>
              <Button
                type="button"
                onClick={handleGenerateStory}
                disabled={isLoading.status}
                variant="contained"
                color="secondary"
              >
                Generate Story
              </Button>
              <Box sx={{ position: "relative", mt: 2 }}>
                <TextField
                  fullWidth
                  type="text"
                  name="story"
                  value={formData.patientDetails.story}
                  disabled={isLoading.status}
                  onChange={handleInputChange}
                  minRows={8}
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    rows: 12,
                    multiline: true,
                    inputComponent: "textarea",
                  }}
                />
                {isLoading.status && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: "rgba(255, 255, 255, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: 1, // Make sure the spinner is above the text field
                    }}
                  >
                    <CircularProgress color="success" />
                  </Box>
                )}
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                disabled={isLoading.status}
                color="success"
                sx={{ mt: 2 }}
              >
                Save Patient
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default PatientForm;
