const express = require('express');
const cors = require('cors');
const port = process.env.PORT;
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const adminapi = require('./routes/adminapi');
const api = require('./routes/api');

dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/api", adminapi);
app.use("/api", api);

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

app.get("/api", (req, res) => {
    res.json({ message: "Welcome to the API" });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
