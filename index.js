const express = require('express');
const app = express();
const cors = require('cors');
const databaseConnection = require('./utils/databaseConnection');
const port = process.env.PORT || 5000;


// middleware
app.use(cors());
app.use(express.json());


// database connection
databaseConnection()

app.get("/", (req, res, next) => {
    res.send("server running?")
});

app.listen(port, () => {
    console.log(`server running on port: ${port}`)
});