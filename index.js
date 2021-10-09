const express = require("express");
const app = express();
const port = 3000;

const productController = require("./controller/productController");

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", productController.index);

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
