// patients.js Contains all patient data queries

/// FETCH PATIENT DATA ///
const getAllPatientsByOrg = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT patients.id, patients.patient_case, patients.date_admitted, patients.release_date, patients.is_released, patients.is_archived, patients.created_at, species.name AS species, COALESCE(patients.image, species.image) AS image FROM patients 
    JOIN species ON patients.species_id = species.id
    WHERE organization_id = $1 AND patients.is_archived = false
    ORDER BY patients.date_admitted`,
    [orgId]
  );
  return rows;
}

const getPatientById = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patients.patient_case, patients.location_found, patients.date_admitted, patients.release_date, patients.is_released, patients.story, patients.is_archived, species.name AS species, COALESCE(patients.image, species.image) AS image FROM patients
    JOIN species ON patients.species_id = species.id
    WHERE patients.id = $1 AND patients.is_archived = false`,
    [patientId]
  );
  return rows;
}

const getAllPatientDataById = async (db, patientId) => {
  const { rows } = await db.query(
    `SELECT patients.*, age_ranges.range_name AS age_range FROM patients
    JOIN age_ranges ON patients.age_range_id = age_ranges.id
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

/// UPDATE & CREATE PATIENTS ///

const updatePatientDetails = async (db, patientId, patientDetails) => {
  try {
  await db.query(
      `UPDATE patients SET patient_case = $1, species_id = $2, location_found = $3, 
      date_admitted = $4, release_date = $5, is_released = $6, age_range_id = $7,
      story = $8, image = $9, updated_at = CURRENT_TIMESTAMP WHERE id = $10`,
      [patientDetails.patient_case,
      patientDetails.species_id,
      patientDetails.location_found,
      patientDetails.date_admitted,
      patientDetails.release_date || null,
      patientDetails.is_released,
      patientDetails.age_range_id,
      patientDetails.story,
      patientDetails.image || null,
      patientId]
  );
  } catch (error) {
    console.error("Error updating patient:", error);
    throw error;
  }
}

const createPatientDetails = async (db, orgId, patientDetails) => {
  try {
    const { rows } = await db.query(
      `INSERT INTO patients (organization_id, patient_case, species_id, location_found, 
      date_admitted, release_date, is_released, age_range_id, story, image, created_at, updated_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
      RETURNING id`,
      [
        orgId,
        patientDetails.patient_case,
        patientDetails.species_id,
        patientDetails.location_found,
        patientDetails.date_admitted,
        patientDetails.release_date || null,
        patientDetails.is_released,
        patientDetails.age_range_id,
        patientDetails.story,
        patientDetails.image || null,
      ]
    );
    return rows[0].id
  } catch (error) {
    console.error("Error creating patient:", error);
    throw error;
  }
};

/// ADD & DELETE PATIENT CONDITIONS

const addPatientConditions = async (db, patientId, conditionIds) => {
  try {
    for (const conditionId of conditionIds) {
      await db.query(
        `INSERT INTO patient_conditions (patient_id, condition_id, created_at, updated_at) 
        VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) ON CONFLICT DO NOTHING`,
        [patientId, conditionId]
      );
    }
  } catch (error) {
    console.error("Error adding patient condition:", error);
    throw error;
  }
};

const deletePatientConditions = async (db, patientId, conditionIds) => {
  try {
    for (const conditionId of conditionIds) {
      await db.query(
        `DELETE FROM patient_conditions WHERE patient_id = $1 AND condition_id = $2`,
        [patientId, conditionId]
      );
    } 
  } catch (error) {
  console.error("Error deleting patient condition:", error);
  throw error;
  }

};

/// ADD & DELETE PATIENT TREATMENTS
const addPatientTreatments = async (db, patientId, treatmentIds) => {
  try {
    for (const treatmentId of treatmentIds) {
      await db.query(
        `INSERT INTO patient_treatments (patient_id, treatment_id, created_at, updated_at) 
        VALUES ($1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP) ON CONFLICT DO NOTHING`,
        [patientId, treatmentId]
      );
    }
  } catch (error) {
    console.error("Error adding patient treatment:", error);
    throw error;
  }
};

const deletePatientTreatments = async (db, patientId, treatmentIds) => {
  try {
    for (const treatmentId of treatmentIds) {
      await db.query(
        `DELETE FROM patient_treatments WHERE patient_id = $1 AND treatment_id = $2`,
        [patientId, treatmentId]
      );
    } 
  } catch (error) {
    console.error("Error deleting patient treatment:", error);
    throw error;
  }
};

const updatePatientInformation = async (db, patientId, patientDetails, conditionIds, treatmentIds) => {
  try {
    await db.query("BEGIN");

    // collects conditions and treatments to compare with updates
    const currentConditions = await getPatientConditions(db, patientId);
    const currentConditionIds = currentConditions.map((condition) => condition.condition_id);
    const currentTreatments = await getPatientTreatments(db, patientId);
    const currentTreatmentIds = currentTreatments.map((treatment) => treatment.treatment_id);

    // compares current conditions and treatments with updates
    const conditionsToAdd = conditionIds.filter((id) => !currentConditionIds.includes(id));
    const conditionsToRemove = currentConditionIds.filter((id) => !conditionIds.includes(id));
    const treatmentsToAdd = treatmentIds.filter((id) => !currentTreatmentIds.includes(id));
    const treatmentsToRemove = currentTreatmentIds.filter((id) => !treatmentIds.includes(id));

    // Update patient information
    await Promise.all([
      updatePatientDetails(db, patientId, patientDetails),
      // Add and Remove Conditions if changed
      conditionsToAdd.length > 0 ? addPatientConditions(db, patientId, conditionsToAdd) : [],
      conditionsToRemove.length > 0 ? deletePatientConditions(db, patientId, conditionsToRemove) : [],
      // Add and Remove Treatments if changed
      treatmentsToAdd.length > 0 ? addPatientTreatments(db, patientId, treatmentsToAdd) : [],
      treatmentsToRemove.length > 0 ? deletePatientTreatments(db, patientId, treatmentsToRemove) : [],
      ]);

    await db.query("COMMIT");
  } catch (error) {
    await db.query('ROLLBACK');
    console.error("Error in Updating process:", error);
    throw error;
  }
}

/// CREATE PATIENTS
const createPatient = async (db, orgId, patientDetails, conditionIds, treatmentIds) => {
  try {
    await db.query("BEGIN");
    
    const patientId = await createPatientDetails(db, orgId, patientDetails);
    // ADD Conditions and Treatments
    await Promise.all([
    addPatientConditions(db, patientId, conditionIds),
    addPatientTreatments(db, patientId, treatmentIds),
    ]);
    await db.query("COMMIT");
  } catch (error) {
    await db.query("ROLLBACK");
    console.error("Error in Patient creation process:", error);
    throw error;
  }
}

/// ARCHIVE PATIENTS
const archivePatient = async (db, patientId) => {
  try {
    await db.query(
      `UPDATE patients SET is_archived = true WHERE patients.id = $1`,
      [patientId]
    );
  } catch (error) {
    console.error("Error archiving patient:", error);
    throw error;
  }
}

module.exports = {
  getAllPatientsByOrg,
  getPatientById,
  getAllPatientDataById,
  getPatientConditions,
  getPatientTreatments,
  getAllConditions,
  getAllTreatments,
  getAllAgeRanges,
  updatePatientInformation,
  createPatient,
  archivePatient,
};
