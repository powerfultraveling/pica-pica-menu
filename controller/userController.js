const flash = require("express-flash");
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

        if(!username && !password){
            console.log("hallo both empty")
            req.flash("errorMessage", "帳號密碼未填寫!")
            res.redirect("/login");
            return
        }else if(!password){
            req.flash("errorMessage", "請填寫密碼!");
            res.redirect("/login");
            return
        }else if(!username){
            req.flash("errorMessage", "請填寫帳號!")
            res.redirect("/login");
            return
        }

        User.findOne({
            where: {
                userName: username,
                password: password
            }
        })
        .then((user)=>{
            if(user === null){
                req.flash("errorMessage", "帳號或密碼錯誤!")
                res.redirect("/login");
                return
            }
            req.session.user = user;
            res.redirect("/");
        })
        .catch((err)=>{
            console.log(err.toString());
            req.flash("errorMessage", err.toString());
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