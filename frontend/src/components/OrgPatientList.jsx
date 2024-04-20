import React from "react";
import useAllPatientsByOrg from "../hooks/useAllPatientsByOrg";
import { useParams, Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import {Box, Grid, Card, CardContent, Typography, IconButton, Button } from "@mui/material"
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const OrgPatientList = () => {
  const { user } = useAuth();
  let { orgId } = useParams();
  console.log("component orgid:", orgId)
  const patData = useAllPatientsByOrg(orgId);

  const deletePatient = (patientId) => {
    return alert("Patient Deleted");
  }

  const confirmDelete = (patientId) => {
    if (window.confirm("Are you sure you want to delete this patient?")) {
      deletePatient(patientId);
    }
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" align="left" sx={{ mt: 4, mb: 4, ml: 10 }}>
        Patient List
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ width: "80%", mx: "auto", boxShadow: 3, p: 3 }}
      >
        {patData ? (
          patData.map((patient, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              sx={{ minWidth: 400 }}
              key={index}
            >
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  p: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {patient.species} - {patient.patient_case}
                  </Typography>
                </CardContent>
                <div>
                  <IconButton color="primary" aria-label="edit" sx={{ mr: 1, border: '1px solid', borderColor: 'primary.main', boxShadow: 2 }}>
                    <EditIcon />
                  </IconButton>
                  <IconButton color="secondary" aria-label="delete" sx={{ mr: 1, border: '1px solid', borderColor: 'primary.main', boxShadow: 2 }} onClick={() => confirmDelete(patient.id)}>
                    <DeleteIcon />
                  </IconButton>
                </div>
              </Card>
            </Grid>
          ))
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