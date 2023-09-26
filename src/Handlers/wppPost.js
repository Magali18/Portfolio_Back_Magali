const postWppController = require("../Controller/postWppController");

const wppPost = async (req, res) => {
  console.log("entro al handler");

 

  const { name, number, messagge } = req.body;

  try {
    if (typeof postWppController === "function") {
      const response = await postWppController(name, number, messagge);

      response
        ? res.status(200).json(response)
        : console.log("la data esta vacia");
    } else {
      console.log("no es una funcion");
    }
  } catch (error) {
    res.status(402).json({ message: error.message });
  }
};
module.exports = wppPost;
