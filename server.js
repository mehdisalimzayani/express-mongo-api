const express = require('express')
const connectDB = require("./database/db")
const bodyParser = require("body-parser");
const cors = require("cors");
const studentRouter = require("./routes/studentRoutes")
const app = express()
const port = 3000

// Middleware
app.use(bodyParser.json());
app.use(cors());

connectDB();  
app.get('/', (req, res) => {
    res.send('Hello World!')
  })
// Routes
app.use("/api/students", studentRouter);

app.listen(port, () => {
    console.log(`Basic Api listening on port ${port}`)
  })