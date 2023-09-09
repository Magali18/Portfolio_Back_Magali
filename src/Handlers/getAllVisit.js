const getAllVisitController = require("../Controller/getVisitorController");

const getAllVisitHandler = async (req, res) => {
  try {
    const response = await getAllVisitController();
    response
      ? res.status(200).json(response)
      : console.log('La data esta vacia');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = getAllVisitHandler;
