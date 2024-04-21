// users.js Contains all user data queries

// const { user } = require("pg/lib/defaults");

//GET USER INFORMATION
const getUser = async (db, userId) => {
  const { rows } = await db.query(
    `SELECT first_name, last_name, email, address FROM users WHERE users.id = $1 AND is_deleted = false`,
    [userId]
  );
  return rows;
}

//CREATE USER PROFILE
const registerUser = async (db, userData, hashedPassword) => {
  try {
    await db.query(
      `INSERT INTO users (first_name, last_name, email, address, password, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [
        userData.first_name, //null value accessing as property of object?
        userData.last_name,
        userData.email,
        userData.address,
        hashedPassword
      ]
    );
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
}

//UPDATE USER PROFILE
const updateUser = async (db, userId, userData) => {
  const values = [];
  const columns = [];

  for (const [key, value] of Object.entries(userData)) {
    columns.push(key);
    values.push(value);
  }
  if (values.length === 0) {
    throw new Error("No valid fields provided for update");
  }
  const setColumns = columns.map((column, index) => `${column} = $${index + 1}`).join(', ');
  try {
    await db.query(
      `UPDATE users SET ${setColumns}, updated_at = CURRENT_TIMESTAMP WHERE id = $${columns.length + 1}`,
      [...values,
      userId]
    );
  } catch (error) {
    console.error("Error updating user:", error)
    throw error;
  }
}

module.exports = {
  getUser,
  registerUser,
  updateUser,
};