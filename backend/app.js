const express = require("express");
require('dotenv').config({ path: '.env.development' });
const db = require("./db");
const login = require("./routes/login");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3000;
const server = require("http").Server(app);

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "wildLinkSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.get('/api', (req, res) => {
  res.send('Welcome to the Wild Link API!');
});

app.use("/api", login(db));

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
