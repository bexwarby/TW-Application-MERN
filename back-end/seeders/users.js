/**
 * seeders/users.json - Seeder users
 * Insère les users de base
 */

/* Imports */
const User = require("../models/User");
const users = require("./users.json");

function seedUsers() {
  users.forEach((user) => {
    User.findOne({ name: user.email }, (err, existingModule) => {
      if (err) {
        console.log("Users seeder: user find failed");
        return;
      }

      if (existingModule) {
        console.log(
          "Users seeder: Skipping insert, user " +
            user.fullName + " (" + user.email + ") " +
            " exists"
        );
        return;
      }

      userDoc = new User(user);
      userDoc.save((err) => {
        if (err) {
          console.log("Users seeder: user insert failed");
          console.log(err);
          return;
        }

        console.log("Users seeder: User " + user.fullName + " (" + user.email + ")" + " inserted");
      });
    });
  });
}

module.exports = seedUsers;
