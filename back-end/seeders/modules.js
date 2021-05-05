/**
 * seeders/module.json - Seeder module
 * Inséère les donénes de base des modules
 */

/* Imports */
const Module = require("../models/Module");
const modules = require("./modules.json");

function seedModules() {
  modules.forEach((moduleData) => {
    Module.findOne({ name: moduleData.name }, (err, existingModule) => {
      if (err) {
        console.log("Modules seeder: Module find failed");
        return;
      }

      if (existingModule) {
        console.log(
          "Modules seeder: Skipping insert, module " +
            moduleData.name +
            " exists"
        );
        return;
      }

      newModule = new Module(moduleData);
      newModule.save((err) => {
        if (err) {
          console.log("Modules seeder: Module insert failed");
          console.log(err);
          return;
        }

        console.log("Modules seeder: Module " + moduleData.name + " inserted");
      });
    });
  });
}

module.exports = seedModules;
