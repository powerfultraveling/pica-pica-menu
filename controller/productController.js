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

  addModal: (req, res)=>{
    const add_modal_open = !!req.body.addModalBtn;
    Product.findAll()
    .then((data) => {
      res.render("./homepage/homepage", {
        data: data,
        add_modal_open: add_modal_open
      });
    })
    .catch((err) => {
      console.log(err.toString());
      return;
    });
},

  productAddHandler: (req, res) =>{
    const chineseName = req.body.chineseName;
    const englishName = req.body.englishName;
    const icePrice = req.body.icePrice;
    const hotPrice = req.body.hotPrice;
    const description = req.body.description;
    const category= req.body.category;
    const image = req.body.image;

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
      console.log(err)
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

  adminEdit: (req, res)=>{
    const id = req.params.id;
    Product.findAll()
    .then((data)=>{
      res.render("./admin/adminEdit", {
        data: data,
        add_modal_open: false,
        editId: id
      })
    })
  }
};

module.exports = productController;
