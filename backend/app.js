const express = require("express");
require('dotenv').config({ path: '.env.development' });
const db = require("./db");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routes
const login = require("./routes/login");
const organizations = require("./routes/organizations");
const patients = require("./routes/patients");
const donations = require("./routes/donations");
const users = require("./routes/users");
const story = require("./routes/story");

const app = express();
const PORT = process.env.PORT || 3001;
const server = require("http").Server(app);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());


app.get('/api', (req, res) => {
  res.send('Welcome to the Wild Link API!');
});

app.use("/api", login(db));
app.use("/api", organizations(db));
app.use("/api", patients(db));
app.use("/api", donations(db));
app.use("/api", users(db));
app.use("/api", story());

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
