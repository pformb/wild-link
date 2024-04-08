const express = require("express");
require('dotenv').config();
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);

app.get('/', (req, res) => {
  res.send('Welcome to the Wild Link API!');
});

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
