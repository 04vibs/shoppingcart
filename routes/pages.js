const express=require('express');
const route=express()
const passport=require('../passport')

route.get('/signin',(req,res)=>{
    res.sendFile('/signin.html',{root:'./public'})
  })
  
  route.get('/signup',(req,res)=>{
    res.sendFile('/signup.html',{root:'./public'})
  })


  module.exports=route;