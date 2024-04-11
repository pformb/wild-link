const express = require("express");
require('dotenv').config({ path: '.env.development' });
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// Routes
const login = require("./routes/login");
const organizations = require("./routes/organizations");
const patients = require("./routes/patients");
const donations = require("./routes/donations");
const users = require("./routes/users");

const app = express();
const PORT = process.env.PORT || 3001;
const server = require("http").Server(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
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
app.use("/api", organizations(db));
app.use("/api", patients(db));
app.use("/api", donations(db));
app.use("/api", users(db));

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
