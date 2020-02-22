'use strict'

const express = require('express')
const server = express()

server.use(express.static('public'))

// server.get('/', function(req, res){
//   res.send('Hello world !')
// })

server.listen(3000)