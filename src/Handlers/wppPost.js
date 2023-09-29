const postWppController = require("../Controller/postWppController");

const wppPost = async (req, res) => {
  const { text} = req.body;
  try {
    if (typeof postWppController === "function") {
      const response = await postWppController(text);
      response
        ? res.status(200).json({creado: response})
        : console.log("la data esta vacia");
    } else {
      console.log("no es una funcion");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = wppPost;
