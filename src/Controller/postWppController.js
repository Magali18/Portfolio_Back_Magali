const messageWpp = require("../db");
const axios = require("axios");

const header = {
    headers: {
      Authorization: `Bearer EAAE8DpOkrsQBOxL8iCg57gWkHvjCsstBhKyvQtSnwqWyjZA6VuKcAs9M6BBGeu2wwnYOqe2jw7KuiyXQZBsGxbVkZBTkOmIlr07DMZCxGYYGzZC2as5s7nYnVfU4B7G2EFXr2JtVGfpKulQlzCivxLgieE18TFjl78BojidiRGEUMYOajaR37A27d9TLGunjTRaGe5nnSRWVI3yYNyCoL`,
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
