const express = require('express')
const path = require('path')
const session=require('express-session')
const passport= require('./passport')


const app = express();

app.use(express.json());
app.use(express.urlencoded({
  extended : true
}));

app.use(session({
  secret:'some very very secret thing',
  resave:false,
  saveUninitialized:true
}))

app.use(passport.initialize())
app.use(passport.session())

app.use('/', express.static(path.join(__dirname, 'public')))
<<<<<<< HEAD
=======

>>>>>>> 4a550cbc2d5fb8f6f168ad18523c0c6baf6046d2
app.use('/api', require('./routes/api'))


app.listen(8181, () => {
  console.log("Server started at localhost:8181")
})
