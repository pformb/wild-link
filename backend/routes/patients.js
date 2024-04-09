const router = require("express").Router();
const patients = require("../models/patients");

module.exports = (db) => {
  ///GET REQUESTS///

  //GET ALL PATIENTS FROM ORGANIZATION
  router.get("/organizations/:orgId/patients", async (req, res) => {
    const orgId = req.params.orgId;
    const orgPatients = await patients.getAllPatientsByOrg(db, orgId);
    if (orgPatients) {
      orgPatients.forEach(patient => {
        patient.image = patient.image.startsWith("http") ? patient.image : `/stock-photos/${patient.image}`;
      })
      res.json(orgPatients)
    } else {
      res.status(404).send("No patients found.");
    }
  });
  
  //GET PATIENT BY ID
  router.get("/patients/:patientId", async (req, res) => {
    const patientId = req.params.patientId;
    const patient = await patients.getPatientById(db, patientId);
    if (patient) {
      patient.image = patient.image.startsWith("http") ? patient.image : `/stock-photos/${patient.image}`;
      res.json(patient)
    } else {
      res.status(404).send("Patient not found");
    }
  });
  
  //GET ALL PATIENT DATA AND CONDITION/TREATMENT DATA FOR EDIT FORM
  router.get("/patients/:patientId/edit", async (req, res) => {
    const patientId = req.params.patientId;
    try { 
      const patientDetails = await patients.getAllPatientDataById(db, patientId);
      const patientConditions = await patients.getPatientConditions(db, patientId);
      const patientTreatments = await patients.getPatientTreatments(db, patientId);
      const allConditions = await patients.getAllConditions(db);
      const allTreatments = await patients.getAllTreatments(db);
      const allAgeRanges = await patients.getAllAgeRanges(db);

      res.json({ patientDetails, patientConditions, patientTreatments, allConditions, allTreatments, allAgeRanges });
    } catch (error) {
      res.status(404).send("Patient not found");
    }

    ///POST REQUESTS///

    //POST EDIT PATIENT DATA
    router.post("/patients/:patientId/edit", async (req, res) => {
      const patientId = req.params.patientId;
      const { patientDetails, conditionIds, treatmentIds, patientImages } = req.body;
      try {
        const updatePatient = await patients.updatePatientDetails(db, patientId, patientDetails);
        const updateConditions = await patients.updatePatientConditions(db, patientId, conditionIds);
        const updateTreatments = await patients.updatePatientTreatments(db, patientId, treatmentIds);
        if (patientImages && patientImages.length > 0) {
        const updateImages = await patients.updatePatientImages(db, patientId, patientImages);
        }
        res.send("Patient Successfully Updated");
      } catch {
        res.status(500).send("Server Error: unable to update Patient");
      }
    });
  });
  return router;
};