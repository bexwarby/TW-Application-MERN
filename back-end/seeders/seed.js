/**
 * seeders/seed.js - Script d'éxécution des seeders
 */

/* Imports */
require("dotenv").config({ path: "./.env" });
const mongoose = require("mongoose");
const seedModules = require("./modules");
const seedUsers = require("./users");

/**
 * Database connection
 */
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

/**
 * Seeders
 */

/* Modules seeder */
seedModules();
seedUsers()
