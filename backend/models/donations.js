/// donations.js Contains all donation data queries
/// FETCH DONATION DATA
const getAllDonationsByUser = async (db, userId) => {
  const { rows } = await db.query(
    `SELECT donations.user_id, organizations.organization_name, patients.patient_case, COALESCE(patients.image, species.image) AS image, donations.donation_in_cents, donations.created_at AS donation_date 
    FROM donations 
    INNER JOIN organizations ON donations.organization_id = organizations.id
    INNER JOIN patients ON donations.patient_id = patients.id
    LEFT JOIN species ON patients.species_id = species.id
    WHERE donations.user_id = $1`,
    [userId]
  );
  return rows;
};

const getAllDonationsByOrg = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT CONCAT(users.first_name, ' ', users.last_name) AS user_full_name, donations.organization_id, patients.patient_case, COALESCE(patients.image, species.image) AS image, donations.donation_in_cents, donations.created_at AS donation_date 
    FROM donations 
    INNER JOIN users ON donations.user_id = users.id
    INNER JOIN patients ON donations.patient_id = patients.id
    LEFT JOIN species ON patients.species_id = species.id
    WHERE donations.organization_id = $1`,
    [orgId]
  );
  return rows;
};

const getDonationById = async (db, donationId) => {
  const { rows } = await db.query(
    `SELECT user_id, organization_id, patient_id, donation_in_cents, created_at AS donation_date FROM donations WHERE donations.id = $1`,
    [donationId]
  );
  return rows;
};

///CREATE DONATION///

const createDonation = async (db, userId, donation) => {
  try {
    await db.query(
      `INSERT INTO donations (user_id, organization_id, patient_id, donation_in_cents, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [userId, 
      donation.organizationId,
      donation.patientId,
      donation.donationInCents]
    );
  } catch (error) {
    console.error("Error creating donation:", error);
    throw error;
  }
}

module.exports = {
  getAllDonationsByUser,
  getAllDonationsByOrg,
  getDonationById,
  createDonation,
};