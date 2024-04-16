// VALIDATE PASSWORD
const bcrypt = require("bcrypt");

const validatePassword = async (db, table, id, password) => {
  try {
    const { rows } = await db.query(
      `SELECT password FROM ${table} WHERE id = $1`,
      [id]
    );
    const checkPassword = await bcrypt.compare(password, rows[0].password);
    return checkPassword
  } catch (error) {
    console.error('Failed to validate password');
    throw error;
  }
};

module.exports = { validatePassword };
