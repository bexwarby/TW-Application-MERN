// Imports
require('dotenv').config({ path: './.env' });
const express = require("express");
const app = express();
const myRoutes = require("./routes/myRoutes");
const env = require("./env");

const mongoose = require("mongoose");

const uri = `mongodb+srv://Fsj7ftw1O:${env.dbUser.password}@truewings.685ft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(
  uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Erreur connection" + err);
    }
  }
);

const helmet = require('helmet');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');

// Imports Middleware


// Imports Router
const myRouter = require("./routes/myRoutes");
const traineeRouter = require("./routes/traineeRoutes");
const instructorRouter = require("./routes/instuctorRoutes");
const adminRouter = require("./routes/adminRoutes");

// Middlewares integrated
app.use(helmet());
app.use(cors({ origin: `http://${process.env.CLIENT}`, credentials: true, optionsSuccessStatus: 204 }));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routers
app.use("/", myRouter);
app.use("/trainee", traineeRouter);
app.use("/instuctor", instructorRouter);
app.use("/admin", adminRouter);


// Test Log 404
app.all('*', (req, res, next) => {
  console.log('Log Test: Demande entrante non traitée');
  res.status(404).send('Demande non capturée par le server')
})

module.exports = app;
