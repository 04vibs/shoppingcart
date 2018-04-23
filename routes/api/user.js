const route = require('express').Router();
const User = require('../../db').User;
const passport=require('../../passport');

route.get('/signin',function(req,res){
    res.sendFile('../../public/signin.html')
})
route.get('/signup',function(req,res){
    res.sendFile('../../public/singup.html')
})

route.post('/signin', passport.authenticate('local', {
    failureRedirect: '/signin.html',
    successRedirect: '/products'
}))

route.post('/signup',(req,res)=>{
    User.create({
        username:req.body.username,
        password:req.body.password
    }).then((user)=>{
        if(user){
            res.redirect('signin.html')
        }
    }).catch((err)=>
        res.send("Error creating user")
    )
})


module.exports=route;