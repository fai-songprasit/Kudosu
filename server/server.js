const path = require('path')
const express = require('express')

const server = express()
const sugokuRoutes = require('./routes/kudosu')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/kudosu', sugokuRoutes)

module.exports = server
