// login.js Contains all login queries

const findByEmail = async (db, table, email) => {
  const { rows } = await db.query(
    `SELECT id, first_name, email FROM ${table} WHERE email = $1`,
    [email]
  );
  if (rows.length > 0) {
    return { ...rows[0], role: table };
  }
  return null;
};

module.exports = { findByEmail };
