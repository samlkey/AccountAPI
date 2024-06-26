const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "RESTful Account API",
        version: "0.1.0",
        description:
          "A simple Account API utilising OAuth 2.0 for securing interactions with the API.",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "LogRocket",
          url: "https://logrocket.com",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: ["./routes/*.js"],
};

const PORT = 3000;

exports.options = options; 
exports.PORT = PORT; 