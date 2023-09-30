const postWppController = require("../Controller/postWppController");

const wppPost = async (req, res) => {
  const { text } = req.body;
  try {
    const { data } = await postWppController(text);
    console.log("Mensaje enviado:");
    console.log(data);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports = wppPost;
