/**
 * Admin Controller
 */

const adminController = {
  dbInitModules: async (req, res) => {
    const Step = require("../models/Step");
    const Module = require("../models/Module");

    let steps = [];

    // Insert module 1: Private pilot level (15h total)

    steps.push((new Step().stepName = "Coms master"));
    steps.push((new Step().stepName = "PPL Theoretic al support & coaching"));
    steps.push((new Step().stepName = "Coaching to become a successful pilot"));

    const docModule1 = new Module({
      moduleName: "Private pilot level (15h total)",
      nbHours: 15,
      price: 195 * 3,
      steps: steps,
    });

    docModule1.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      }
    });

    // Insert module 2 : Professional pilot level (25h total)

    steps = [];
    steps.push((new Step().stepName = "IFR basics"));
    steps.push((new Step().stepName = "s IFR flights"));
    steps.push((new Step().stepName = "IFR approachs"));
    steps.push((new Step().stepName = "Tailored training"));
    steps.push((new Step().stepName = "CPL IRME  Theoretic al support "));

    const docModule2 = new Module({
      moduleName: "Professional pilot level (25h total)",
      nbHours: 25,
      price: 345 * 5,
      steps: steps,
    });

    docModule2.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      }
    });

    // Insert module 3 : Expert pilot level (20h total)

    steps = [];
    steps.push((new Step().stepName = "Flying the A320 "));
    steps.push((new Step().stepName = "Flying the B737 "));
    steps.push((new Step().stepName = "IFR approachs"));
    steps.push((new Step().stepName = "Airline assessment prep & coaching"));
    steps.push((new Step().stepName = "Specific theoretical support"));
    steps.push((new Step().stepName = "Tailored advanced training"));

    const docModule3 = new Module({
      moduleName: "Expert pilot level (20h total)",
      nbHours: 20,
      price: 495 * 4,
      steps: steps,
    });

    docModule3.save((err) => {
      if (err) {
        res.status(501).json({ message: err });
      } else {
        res.json({ message: "All Modules created!" });
      }
    });
  },
};

module.exports = adminController;
