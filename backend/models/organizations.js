// Organization.js Contains all organization data queries

const getAllOrganizations = async (db) => {
 const { rows } = await db.query(
  `SELECT * FROM organizations`
 );
 return rows;
};

const getOrganizationById = async (db, id) => {
  const { rows } = await db.query(
    `SELECT * FROM organizations WHERE id = $1`,
    [id]
  );
  return rows[0];
}

module.exports = { getAllOrganizations, getOrganizationById };