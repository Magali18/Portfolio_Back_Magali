const postWppController = require("../Controller/postWppController");

const wppPost = async (req, res) => {
  console.log("--------> entro al handler");

  const { text} = req.body;
console.log('mensaje:' + text)


  try {
    if (typeof postWppController === "function") {

      const response = await postWppController(text);


      response
        ? res.status(200).json(response.data)
        : console.log("la data esta vacia");
    } else {
      console.log("no es una funcion");
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = wppPost;
