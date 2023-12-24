const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const app = express();

const apiroutes = require("./routes/v1/apiRoutes");
//const sequelize = require("./database/dbtrading");

//Conversión a json datos que nos envían por post, put, patch...
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use("/api", apiroutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en http://localhost:${PORT}`));