const messageWpp = require("../db");
const axios = require("axios");
require('dotenv').config();


const {
  TOKEN_WPP
} = process.env;

const header = {
  headers: {
    Authorization: `Bearer ${TOKEN_WPP}`

  },
};


const postWppController = async (text) => {
console.log('entro al ------> controller')
console.log('mensaje:' + text)
const mensajeWpp = ' Porfolio web dice:' + ' ' + text
  const data = {
    messaging_product: "whatsapp",
    to: "543883371406",
    type: "text", 
    text: { 
      preview_url: false, 
      body: mensajeWpp
       
    }
  }
  console.log('------------------')

  try {
    const apiResponse = await axios.post(
      "https://graph.facebook.com/v17.0/132405959956444/messages",
      data,
      header
    );

    console.log("mensaje enviado", apiResponse.data); 

    return apiResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

module.exports = postWppController;
