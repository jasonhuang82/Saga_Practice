var dbData = require('./db/db.js');
var jsonServer  = require('json-server')
var server      = jsonServer.create()
var router      = jsonServer.router(dbData)
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(5000, function () {
    console.log('JSON Server is running')
})