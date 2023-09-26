const messageWpp = require("../db");
const axios = require("axios");

const header = {
  headers: {
    Authorization: `BearerEAAE8DpOkrsQBOxKD6u5ZCjGZA4d5N4Oov8vTb2V025R0i0vJ6ZBW19UIZARLLlZBQSsbS5tN91nA55reFNeWVCsW110es8BzyfmRUO5SLXCOR3h7L99bPlm9lCWpASrbK00YWZCUsyTAecSjh9zzOWc3K9YjjxW30BkQ0ysOIwJCHnLOZC2MIKZB6KxZB`,
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
};

const postWppController = async (name, number, message) => {
  const data = {
    "messaging_product": "whatsapp",
    "to": "543883371406",
    "type": "template",
    "template": {
      "name": "hello_world",
      "language": {
        "code": "en_US"
      }
    }
  }

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
