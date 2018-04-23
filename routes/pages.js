const express=require('express');
const route=express()
const passport=require('../passport')

route.get('/signin',(req,res)=>{
    res.sendFile('signin.html',{root:'./public'})
  })
  
  route.get('/signup',(req,res)=>{
    res.sendFile('signup.html',{root:'./public'})
  })

  route.get('/products',(req,res)=>{
      res.sendFile('products.html',{root:'./public'})
  })
route.get('/addProduct', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

route.get('/cart',(req,res)=>{
  if(req.user)
  res.sendFile('cart.html',{root:'./public'})
  else res.redirect('/signin');  
})

route.get('/logout', function(req, res){
  req.logout();
  res.redirect('/products');
})

 


  module.exports=route;