const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));