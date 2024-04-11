// users.js Contains all user data queries

const getUser = async (db, userId) => {
  const { rows } = await db.query(
    `SELECT first_name, last_name, email, address FROM users WHERE users.id = $1 AND is_deleted = false`,
    [userId]
  );
  return rows;
}

const registerUser = async (db, userData, hashedPassword) => {
  try {
    await db.query(
      `INSERT INTO users (first_name, last_name, email, address, password, created_at, updated_at) 
        VALUES ($1, $2, $3, $4, $5, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [
        userData.firstName,
        userData.lastName,
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

module.exports = {
  getUser,
  registerUser,
};