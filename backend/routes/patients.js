const router = require("express").Router();
const patients = require("../models/patients");

module.exports = (db) => {
  ///GET REQUESTS///

  //GET ALL PATIENTS FROM ORGANIZATION
  router.get("/organizations/:orgId/patients", async (req, res) => {
    const orgId = req.params.orgId;
    const orgPatients = await patients.getAllPatientsByOrg(db, orgId);
    if (orgPatients.length > 0) {
      orgPatients.forEach(patient => {
        patient.image = patient.image.startsWith("http") ? patient.image : `/stock-photos/${patient.image}`;
      })
      res.json(orgPatients)
    } else {
      res.status(404).send("No patients found.");
    }
  });
  
  //GET PATIENT BY ID
  router.get("/organizations/:orgId/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    const patientFound = await patients.getPatientById(db, patientId);

    if (patientFound.length === 0) {
      return res.status(404).send("Patient not found");
    }
    const patient = patientFound[0];
    patient.image = patient.image.startsWith("http") ? patient.image : `/stock-photos/${patient.image}`;
    res.json(patient)
  });
  
  //GET ALL PATIENT DATA AND CONDITION/TREATMENT DATA FOR EDIT FORM
  router.get("/organizations/:orgId/patients/:patientId/edit", async (req, res) => {
    const patientId = req.params.patientId;
    try {
      
      const editFormData = await Promise.all([
        patients.getAllPatientDataById(db, patientId),
        patients.getPatientConditions(db, patientId),
        patients.getPatientTreatments(db, patientId),
        patients.getAllConditions(db),
        patients.getAllTreatments(db),
        patients.getAllAgeRanges(db)
      ]);

      if (!results.every((result) => result && result.length > 0)) {
        return res.status(404).send("Error Form data is missing");
      }

      res.json({
        patientDetails,
        patientConditions,
        patientTreatments,
        allConditions,
        allTreatments,
        allAgeRanges,
      });
    } catch (error) {
      res.status(500).send("Server Error: data not found", error);
    }
  });
  ///POST REQUESTS///

  //POST EDIT PATIENT DATA
  router.patch("/organizations/:orgId/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    const { patientDetails, patientConditions = [], patientTreatments = [] } = req.body;
    // CONVERT EXTRACT FROM NESTED OBJECTS TO MAKE ARRAYS
    const conditionIds = patientConditions.map(condition => condition.condition_id);
    const treatmentIds = patientTreatments.map(treatment => treatment.treatment_id);
    try {
      await patients.updatePatientInformation(db, patientId, patientDetails, conditionIds, treatmentIds)
      res.status(200).send("Patient Updated");
    } catch (error) {
      res.status(500).send("Server Error: unable to update Patient", error);
    }
  });

  //POST CREATE PATIENT
  router.post("/organizations/:orgId/patients/new", async (req, res) => {
    const orgId = req.params.orgId;
    const { patientDetails, patientConditions = [], patientTreatments = [] } = req.body;
    // CONVERT EXTRACT FROM NESTED OBJECTS TO MAKE ARRAYS
    const conditionIds = patientConditions.map(condition => condition.condition_id);
    const treatmentIds = patientTreatments.map(treatment => treatment.treatment_id);
    try {
      await patients.createPatient(db, orgId, patientDetails, conditionIds, treatmentIds)
      res.status(200).send("Patient Created");
    } catch (error) {
      res.status(500).send("Server Error: unable to create Patient", error);
    }
  });

  //POST DELETE/ACHIVE PATIENT
  router.patch("/organizations/:orgId/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    try {
      await patients.archivePatient(db, patientId);
      res.status(200).send("Patient Archived");
    } catch (error) {
      res.status(500).send("Server Error: unable to archive Patient", error);
    }
  });

  return router;
};