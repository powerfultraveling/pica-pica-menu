const express = require("express");
const app = express();
const port = 3000;

const productController = require("./controller/productController");
const pageController = require("./controller/pageController")

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.get("/", productController.index);
app.post("/", productController.addModal);
app.get("/login", pageController.loginPage);
app.get("/edit/:id", productController.adminEdit);
app.get("/delete/:id", productController.productDeleteHandeler);
app.post("/add", productController.productAddHandler);


app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
