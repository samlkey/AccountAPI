const { options, PORT } = require('./constants.js');
const express = require("express");
const bodyParser = require("body-parser"),
    swaggerJsdoc = require("swagger-jsdoc"),
    swaggerUi = require("swagger-ui-express"),
    helmet = require("helmet");


const specs = swaggerJsdoc(options);
const app = express();

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
);
app.use(helmet());

app.listen(PORT, (error) => {
    if(!error){
        console.log("Server is listening on PORT:" + PORT);
    }else{
        console.log("An error prevented the server from starting.", error); 
    }
})

app.get('/', function(req, res){
    res.redirect("/docs");
});

require('./routes/auth.js')(app);