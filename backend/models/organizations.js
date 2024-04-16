// Organization.js Contains all organization data queries

//GET ALL ORGANIZATIONS
const getAllOrganizations = async (db) => {
 const { rows } = await db.query(
   `SELECT id, organization_name, website_url, image, phone_number, address FROM organizations WHERE is_deleted = false `
 );
 return rows;
};

//GET ORGANIZATION BY ID
const getOrganizationById = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT organization_name, website_url, image, phone_number, address FROM organizations WHERE id = $1 AND is_deleted = false`,
    [orgId]
  );
  return rows;
}

//GET ORGANIZATION PROFILE
const getOrganizationProfile = async (db, orgId) => {
  const { rows } = await db.query(
    `SELECT organization_name, website_url, image, first_name, last_name, phone_number, email, address FROM organizations WHERE id = $1 AND is_deleted = false`,
    [orgId]
  );
  return rows;
}

//UPDATE ORGANIZATION PROFILE
const updateOrganizationProfile = async (db, orgId, orgData) => {
  const values = [];
  const columns = [];
  for (const [key, value] of Object.entries(orgData)) {
    columns.push(key);
    values.push(value);
  }
  if (values.length === 0) {
    throw new Error("No valid fields provided for update");
  }
  const setColumns = columns
    .map((column, index) => `${column} = $${index + 1}`)
    .join(", ");
  try {
    await db.query(
      `UPDATE organizations SET ${setColumns}, updated_at = CURRENT_TIMESTAMP WHERE id = $${columns.length + 1}`,
      [...values, orgId]
    );
  } catch (error) {
    console.error("Error updating organization:", error);
    throw error;
  }
};


module.exports = {
  getAllOrganizations,
  getOrganizationById,
  getOrganizationProfile,
  updateOrganizationProfile,
};