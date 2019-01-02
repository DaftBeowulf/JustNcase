const server = require('express')()

const moduleConfig = require('./config/modules')
const connectMongo = require('./config/mongo')

moduleConfig(server)
connectMongo()

module.exports = server