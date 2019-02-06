const path = require('path')
const express = require('express')

const server = express()

const apiRoutes = require('./api-routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/weather', apiRoutes)

module.exports = server
