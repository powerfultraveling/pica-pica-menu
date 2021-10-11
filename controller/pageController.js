const pageController ={
    admin: (req, res)=>{
        res.render("./admin/admin")
    },


    adminManage: (req, res)=>{
        res.render("./admin/adminManage")
    },

    loginPage: (req, res)=>{
        res.render("./admin/adminLogin")
    }
}

module.exports = pageController