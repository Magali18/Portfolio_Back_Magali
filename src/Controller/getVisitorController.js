const { Visitante } = require("../db");

const getAllVisitController = async () => {
  return (allVisit = await Visitante.findAll());
};
module.exports = getAllVisitController;
