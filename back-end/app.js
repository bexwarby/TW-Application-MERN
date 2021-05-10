// Imports
require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();

const path = require("path");
const helmet = require("helmet");
const cors = require("cors");

// MongoDB
const mongoose = require("mongoose");
const uri = `mongodb+srv://${process.env.DB_LOGIN_PWD}${process.env.DB_SERVER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Atlas connected."))
  .catch((err) => console.log("Erreur connection" + err));

// Imports Middleware (auth ...)
const authToken = require("./middlewares/authToken");

// Imports Router
const usrRouter = require("./routes/usrRoutes");
const traineeRouter = require("./routes/traineeRoutes");
const instructorRouter = require("./routes/instructorRoutes");
const adminRouter = require("./routes/adminRoutes");

// Middlewares integrated
app.use(helmet());
app.use(
  cors({
    origin: `http://${process.env.CLIENT}`,
    credentials: true,
    optionsSuccessStatus: 204,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routers
app.use("/usr", usrRouter);
app.use("/admin", authToken.admin, adminRouter);
app.use("/trainee", authToken.trainee, traineeRouter);
app.use("/instructor", authToken.instructor, instructorRouter);

// Test Log 404
app.all("*", (req, res, next) => {
  console.log("Log Test: Demande entrante non traitée");
  res.status(404).send("Demande non capturée par le server");
});

module.exports = app;
