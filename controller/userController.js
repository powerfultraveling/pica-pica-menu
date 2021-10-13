const session = require("express-session");
const db = require("../models");
const User = db.User;

const userController ={
    loginPage: (req, res)=>{
        res.render("./admin/adminLogin");
    },

    loginHandler: (req, res)=>{
        const username = req.body.username;
        const password = req.body.password;
        User.findOne({
            where: {
                userName: username,
                password: password
            }
        })
        .then((user)=>{
            console.log("login success")
            req.session.user = user;
            res.redirect("/");
        })
        .catch((err)=>{
            console.log(err.toString());
            res.redirect("/login");
            return 
        })
    },

    logoutHandler: (req, res)=>{
        req.session.user = false;
        res.redirect("/");
    }
}

module.exports = userController;