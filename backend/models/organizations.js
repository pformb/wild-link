// Organization.js Contains all organization data queries

const getAllOrganizations = async (db) => {
 const { rows } = await db.query(
   `SELECT organization_name, website_url, phone_number, address FROM organizations WHERE is_deleted = false `
 );
 return rows;
};

const getOrganizationById = async (db, id) => {
  const { rows } = await db.query(
    `SELECT organization_name, website_url, phone_number, address FROM organizations WHERE id = $1 AND is_deleted = false`,
    [id]
  );
  return rows[0];
}

module.exports = { getAllOrganizations, getOrganizationById };