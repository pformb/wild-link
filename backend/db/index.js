const pg = require("pg");

const client = new pg.Client({
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

client.connect();
client.on("error", (err) => {
  console.error(`Error connecting to Postgres server:\n${err.stack}`);
});

module.exports = client;