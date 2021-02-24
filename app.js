const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");

// Configura o express para aceitar requisições do tipo POST
app.use(bodyParser.urlencoded({ extended: false }));

const router = require("./routes/index.routes");
app.use("/", router);

app.listen(4000, () => {
  console.log("Express is up and running at port 4000");
});
