const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));


// ---- Code originally from environment.js ----

// const path = require("path");

// const ENV = process.env.NODE_ENV || "development";
// const PATH = path.resolve(__dirname, ".env." + ENV);

// require("dotenv").config({ path: PATH });

// module.exports = ENV;

// Path: wild-link/backend/src/index.js