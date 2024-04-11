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
      const patientDetails = await patients.getAllPatientDataById(
        db,
        patientId
      );
      const patientConditions = await patients.getPatientConditions(
        db,
        patientId
      );
      const patientTreatments = await patients.getPatientTreatments(
        db,
        patientId
      );
      const allConditions = await patients.getAllConditions(db);
      const allTreatments = await patients.getAllTreatments(db);
      const allAgeRanges = await patients.getAllAgeRanges(db);

      res.json({
        patientDetails,
        patientConditions,
        patientTreatments,
        allConditions,
        allTreatments,
        allAgeRanges,
      });
    } catch (error) {
      res.status(404).send("Patient not found", error);
    }
  });
  ///POST REQUESTS///

  //POST EDIT PATIENT DATA
  router.post("/organizations/:orgId/patients/:patientId/edit", async (req, res) => {
    console.log("POST REQUEST RECIEVED");
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
  router.post("/organizations/:orgId/patients/:patientId/archive", async (req, res) => {
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