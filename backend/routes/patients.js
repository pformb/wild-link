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
      res.status(404).json({ message: "No patients found."});
    }
  });
  
  //GET PATIENT BY ID
  router.get("/organizations/:orgId/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    const patientFound = await patients.getPatientById(db, patientId);

    if (patientFound.length === 0) {
      return res.status(404).json({ message: "No patient found."});
    }
    const patient = patientFound[0];
    patient.image = patient.image.startsWith("http") ? patient.image : `/stock-photos/${patient.image}`;
    res.json(patient)
  });
  
  //GET ALL PATIENT DATA AND CONDITION/TREATMENT DATA FOR EDIT FORM
  router.get("/organizations/:orgId/patients/:patientId/edit", async (req, res) => {
    const patientId = req.params.patientId;
    try {
      
      const [
        patientDetails,
        patientConditions,
        patientTreatments,
        allConditions,
        allTreatments,
        allAgeRanges,
      ] = await Promise.all([
        patients.getAllPatientDataById(db, patientId),
        patients.getPatientConditions(db, patientId),
        patients.getPatientTreatments(db, patientId),
        patients.getAllConditions(db),
        patients.getAllTreatments(db),
        patients.getAllAgeRanges(db),
      ]);

      if (
        patientDetails.length === 0 ||
        allConditions.length === 0 ||
        allTreatments.length === 0 ||
        allAgeRanges.length === 0 ||
        patientConditions.length === 0 ||
        patientTreatments.length === 0
      ) {
        return res
          .status(404)
          .json({ error: "Error: Form data is missing or incomplete." });
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
      console.error(error);
      res.status(500).json({ error: "Server Error: data not found"});
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
      res.status(200).json({ message: "Patient Updated"});
    } catch {
      res.status(500).json({ error: "Server Error: unable to update Patient"});
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
      res.status(200).json({message: "Patient Created"});
    } catch {
      res.status(500).json({ error: "Server Error: unable to create Patient"});
    }
  });

  //POST DELETE/ACHIVE PATIENT
  router.patch("/organizations/:orgId/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    try {
      await patients.archivePatient(db, patientId);
      res.status(200).json({ message: "Patient Archived"});
    } catch {
      res.status(500).json({ message: "Server Error: unable to archive Patient"});
    }
  });

  return router;
};