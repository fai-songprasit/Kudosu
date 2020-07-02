const path = require('path')
const express = require('express')

const server = express()
const sugokuRoutes = require('./sugoku')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/sugoku', sugokuRoutes)

module.exports = server
