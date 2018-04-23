const route =require('express').Router();


route.use('/signin',require('./signin'))

route.use('/signup',require('./signup'))

 route.use('/vendors', require('./vendors'));
 route.use('/products', require('./products'));
 route.use('/cart', require('./cart'));
// route.use('/', (request, response) => {
//   response.status(404).send('Inside Index.js')
// })

module.exports = route
