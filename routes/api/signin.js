const route = require('express').Router();
const User = require('../../db').User;
const passport=require('../../passport');

route.get('/',function(req,res){
    res.sendFile('../../public/signin.html')
})

route.post('/',(req,res)=>
{
console.log("alksjd");
res.send("asdasd")
})
route.post('/signup',(req,res)=>{
    console.log("fsadfdslfjdhsg dksjgfdhsbkgjds bgksd b")
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