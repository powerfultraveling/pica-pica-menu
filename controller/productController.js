const db = require("../models");
const Product = db.Product;
const Category = db.Category;

const productController = {
  index: (req, res) => {
    Product.findAll()
      .then((data) => {
        res.render("./homepage/homepage", {
          data: data,
          add_modal_open: false
        });
      })
      .catch((err) => {
        console.log(err.toString());
        return;
      });
  },

  productAdd: (req, res) =>{
    res.render("./admin/adminAdd");
  },

  productAddHandler: (req, res) =>{
    const chineseName = req.body.chineseName;
    const englishName = req.body.englishName;
    const icePrice = req.body.icePrice;
    const hotPrice = req.body.hotPrice;
    const description = req.body.description;
    const category= req.body.category;
    let image;

    if(req.file ){
      image = req.file.path;
    }

    Product.create({
      chineseName: chineseName,
      englishName: englishName,
      icePrice: icePrice,
      hotPrice: hotPrice,
      description: description,
      categoryid: category,
      image: image
    })
    .then(()=>{
      res.redirect("/")
    })
    .catch((err)=>{
      console.log(err);
      req.flash("errorMessage", err.toString());
      res.redirect("/add");
      return
    })
  },

  adminManage: (req, res)=>{
    Product.findAll()
    .then((data)=>{
      res.render("./admin/adminManage")
    })
  },

  productDeleteHandeler: (req, res)=>{
    const id = req.params.id;
    Product.findOne({
      where:{
        id: id
      }
    })
    .then((product)=>{
      product.destroy()
    })
    .then(()=>{
      console.log("successfully deleted!")
      res.redirect("/");
    })
    .catch((err)=>{
      console.log(err);
      return
    })
  },

  productEdit: (req, res)=>{
    const id = req.params.id;
    Product.findOne({
      where:{
        id: id
      }
    })
    .then((product)=>{
      res.render("./admin/adminEdit", {
        product: product
      })
    })
  },

  productEditHandler: (req, res)=>{
    const id = req.params.id;
    const chineseName = req.body.chineseName;
    const englishName = req.body.englishName;
    const icePrice = req.body.icePrice;
    const hotPrice = req.body.hotPrice;
    const description = req.body.description;
    const category= req.body.category;
    let image;

    if(!chineseName || !englishName  ){
      req.flash("errroMessage", "請填寫必要欄位");
      res.redirect(`/edit/${id}`);
      return 
    }

    if(req.file){
      let path = req.file.path;
      let newStr = path.replace(/\\/g,"/")
      let arr = newStr.split("public")
      image = arr[1];
    }else{
      console.log("i already have file!")
      image = req.body.oldImage;
    }

    Product.update({
      chineseName: chineseName,
      englishName: englishName,
      icePrice: icePrice,
      hotPrice: hotPrice,
      description: description,
      categoryid: category,
      image: image
    },{
      where:{
        id: id
      }
    })
    .then(()=>{
      console.log("success!")
      res.redirect("/");
    })
    .catch((err)=>{
      console.log(err.toString())
      res.redirect("/");
    })
  }
};

module.exports = productController;
