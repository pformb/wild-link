// login.js Contains all login queries

const findByEmail = async (db, table, email) => {
  const { rows } = await db.query(
    `SELECT * FROM ${table} WHERE email = $1`,
    [email]
  );
  return rows[0];
};

module.exports = { findByEmail };
