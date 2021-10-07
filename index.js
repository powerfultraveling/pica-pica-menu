const express = require("express");
const app = express();

const productController = require("./controller/productController");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/");

app.listen(3000, () => {
  console.log("listen on port!");
});
