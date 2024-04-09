// patients.js Contains all patient data queries

/// RETRIEVE PATIENT DATA ///
const getAllPatientsByOrg = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT patients.patient_case, patients.date_admitted, patients.release_date, patients.is_released, patients.is_archived, patients.created_at, species.name, COALESCE(patient_images.image_url, species.image) AS image FROM patients 
    JOIN species ON patients.species_id = species.id
    LEFT JOIN patient_images ON patients.id = patient_images.patient_id 
    WHERE organization_id = $1
    ORDER BY patients.created_at`,
    [orgId]
  );
  return rows;
}

const getPatientById = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patients.patient_case, patients.location_found, patients.date_admitted, patients.release_date, patients.is_released, patients.story, patients.is_archived, species.name, COALESCE(patient_images.image_url, species.image) AS image FROM patients
    JOIN species ON patients.species_id = species.id
    LEFT JOIN patient_images ON patients.id = patient_images.patient_id
    WHERE patients.id = $1`,
    [patientId]
  );
  return rows[0];
}

const getAllPatientDataById = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patients.*, patient_images.image_url, age_ranges.range_name AS age_range FROM patients
    JOIN age_ranges ON patients.age_range_id = age_ranges.id
    LEFT JOIN patient_images ON patients.id = patient_images.patient_id
    WHERE patients.id = $1`,
    [patientId]
  );
  return rows[0];
}

const getPatientConditions = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patient_conditions.condition_id, conditions.condition_name FROM patient_conditions 
    JOIN conditions ON patient_conditions.condition_id = conditions.id
    WHERE patient_id = $1`,
    [patientId]
  );
  return rows;
}

const getPatientTreatments = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patient_treatments.treatment_id, treatments.treatment_name FROM patient_treatments 
    JOIN treatments ON patient_treatments.treatment_id = treatments.id
    WHERE patient_id = $1`,
    [patientId]
  );
  return rows;
}

/// RETRIEVE CONDITIONS, TREATMENTS, AGES DATA FOR FORMS ///
const getAllConditions = async (db) => {
  const { rows } = await db.query(
    `SELECT * FROM conditions`
  );
  return rows;
}

const getAllTreatments = async (db) => {
  const { rows } = await db.query(
    `SELECT * FROM treatments`
  );
  return rows;
}

const getAllAgeRanges = async (db) => {
  const { rows } = await db.query(
    `SELECT * FROM age_ranges`
  )
  return rows;
}

/// UPDATE PATIENT DATA ///

const updatePatientDetails = async (db, patientId, patientDetails) => {
  try {
  await db.query(
      `UPDATE patients SET patient_case = $1, species_id = $2, location_found = $3, 
      date_admitted = $4, release_date = $5, is_released = $6, age_range_id = $7,
      story = $8, updated_at = $9 WHERE id = $10`,
      [patientDetails.patient_case,
      patientDetails.species_id,
      patientDetails.location_found,
      patientDetails.date_admitted,
      patientDetails.release_date || null,
      patientDetails.is_released,
      patientDetails.age_range_id,
      patientDetails.story,
      new Date().toISOString(),
      patientId]
  );
  } catch {
    console.error("Error updating patient:", error);
    throw error;
  }
}

const updatePatientConditions = async (db, patientId, conditionIds) => {
  try {
  } catch {
    console.error("Error updating patient:", error);
    throw error;
  }
};

const updatePatientTreatments = async (db, patientId, treatmentIds) => {
  try {
  } catch {
    console.error("Error updating patient:", error);
    throw error;
  }
};

const updatePatientImages = async (db, patientId, patientImages) => {
  try {
  } catch {
    console.error("Error updating patient:", error);
    throw error;
  }
};

module.exports = {
  getAllPatientsByOrg,
  getPatientById,
  getAllPatientDataById,
  getPatientConditions,
  getPatientTreatments,
  getAllConditions,
  getAllTreatments,
  getAllAgeRanges,
  updatePatientDetails,
  updatePatientConditions,
  updatePatientTreatments,
  updatePatientImages,
};