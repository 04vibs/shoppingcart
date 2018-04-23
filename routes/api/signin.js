const route = require('express').Router();
const User = require('../../db').User;
const passport=require('../../passport');

route.get('/',function(req,res){
    res.sendFile('../../public/signin.html')
})


route.post('/', passport.authenticate('local', {
    failureRedirect: '/signin.html',
    successRedirect: '/products'
}))



module.exports=route;