/// donations.js Contains all donation data queries
/// FETCH DONATION DATA
const getAllDonationsByUser = async (db, userId) => {
  const { rows } = await db.query(
    `SELECT user_id, organization_id, patient_id, donation_in_cents, created_at AS donation_date FROM donations WHERE donations.user_id = $1`,
    [userId]
  );
  return rows;
};

const getAllDonationsByOrg = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT user_id, organization_id, patient_id, donation_in_cents, created_at AS donation_date FROM donations WHERE donations.organization_id = $1`,
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