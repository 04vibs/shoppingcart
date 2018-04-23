const route = require('express').Router();
const User = require('../../db').User;
const passport=require('../../passport');


route.post('/',(req,res)=>{

    User.create({
        username:req.body.username,
        password:req.body.password
    }).then((user)=>{
        if(user){
            res.redirect('/signin.html')
        }
    }).catch((err)=>
        res.send("Error creating user")
    )
})


module.exports=route;