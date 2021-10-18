const express = require("express");
const session = require("express-session");
const flash = require('connect-flash');
const multer = require("multer");
const bodyParser = require('body-parser')
const path = require("path")
const app = express();
const port = process.env.PORT || 3000;

//controller
const productController = require("./controller/productController");
const userController = require("./controller/userController");

//body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//multer
const uploadDesatination = path.join(__dirname, "./public/img/products")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDesatination)
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})
const upload = multer({ storage: storage })

//express session
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash())

//local variable
app.use((req, res, next)=>{
  res.locals.user = req.session.user;
  res.locals.errorMessage = req.flash("errorMessage");
  next()
})

//router
app.get("/", productController.index);
app.get("/login", userController.loginPage);
app.post("/login", userController.loginHandler);
app.get("/add", productController.productAdd);
app.get("/logout", userController.logoutHandler);
app.get("/edit/:id", productController.productEdit);
app.post("/edit/:id", upload.single('image'), productController.productEditHandler)
app.get("/delete/:id", productController.productDeleteHandeler);
app.post("/add", upload.single('image'), productController.productAddHandler);

//listen to port 
app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
