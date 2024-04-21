import React, { useState, useEffect } from "react";
import useAllPatientsByOrg from "../hooks/useAllPatientsByOrg";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Box, Grid, Card, CardContent, Typography, IconButton, Button, Paper, Tab, Tabs } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const OrgPatientList = () => {
  const { user } = useAuth();
  let { orgId } = useParams();
  const patData = useAllPatientsByOrg(orgId);
  const navigate = useNavigate();

  const [selectedTab, setSelectedTab] = useState(0);
  const [patients, setPatients] = useState(patData);
  useEffect(() => {
    setPatients(patData);
  }, [patData]);

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const goToEditForm = (orgId, patientId) => {
    navigate(`/organizations/${orgId}/patients/${patientId}/edit`);
  };

  const goToNewForm = (orgId) => {
    navigate(`/organizations/${orgId}/patients/new`);
  };

  const deletePatient = async (orgId, patientId) => {
    const token = localStorage.getItem("token");
    const endpoint = `/api/organizations/${orgId}/patients/${patientId}/archive`;
    try {
      const response = await fetch(endpoint, {
        method: "PATCH",
        headers: { 'Authorization': `Bearer ${token}` },
      });
      if (!response.ok) {
        throw new Error("Failed to archive patient");
      }
        const result = await response.json();
        const updatedPatients = patients.filter(patient => patient.id !== patientId);
        setPatients(updatedPatients);
        alert(`Success: ${result.message}`);
        console.log(result);
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to archive patient");
    }
  }

  const confirmDelete = (orgId, patientId) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      deletePatient(orgId, patientId);
    }
  }

  if (!user || user.role !== "organizations") {
    // Redirect them to the home page
   return <Navigate to="/home" replace />;
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" align="left" sx={{ mt: 4, mb: 4, ml: 10 }}>
        Patient List
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 4, ml: 10 }}
        onClick={() => goToNewForm(orgId)}
      >
        Add New Patient
      </Button>
      <Paper sx={{ width: "75%", mx: "auto", mb: 2, boxShadow: 3 }}>
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          aria-label="Patient Tabs"
          variant="fullWidth" // Ensures the tabs are equally spaced
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <Tab label="Current Patients" />
          <Tab label="Released Patients" />
        </Tabs>
      </Paper>
      <Grid
        container
        spacing={2}
        sx={{
          width: "75%",
          mx: "auto",
          boxShadow: 3,
          p: 3,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(450px, 1fr))",
          gap: 2,
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        {patients && patients.length > 0 ? (
          patients.filter((patient) =>
            selectedTab === 0 ? !patient.is_released : patient.is_released
          ).length > 0 ? (
            patients
              .filter((patient) =>
                selectedTab === 0 ? !patient.is_released : patient.is_released
              )
              .map((patient, index) => (
                <Grid item sx={{ width: 450, mb: 2, mx: "auto" }} key={index}>
                  <Card
                    sx={{
                      width: "100%",
                      maxWidth: 450,
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      p: 2,
                      boxShadow: 2,
                      mb: 2,
                    }}
                  >
                    <CardContent
                      sx={{
                        flexGrow: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography variant="h6">
                        {patient.species} - {patient.patient_case}
                      </Typography>
                      <Box>
                        <IconButton
                          color="primary"
                          aria-label="edit"
                          sx={{
                            mr: 1,
                            border: "1px solid",
                            borderColor: "primary.main",
                            boxShadow: 2,
                          }}
                          onClick={() => goToEditForm(orgId, patient.id)}
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          color="secondary"
                          aria-label="delete"
                          sx={{
                            mr: 1,
                            border: "1px solid",
                            borderColor: "primary.main",
                            boxShadow: 2,
                          }}
                          onClick={() => confirmDelete(orgId, patient.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))
          ) : (
            <Grid item xs={12}>
              <Typography>No Patients Found in this category.</Typography>
            </Grid>
          )
        ) : (
          <Grid item xs={12}>
            <Typography>No Patients Found, Create a patient!</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default OrgPatientList;