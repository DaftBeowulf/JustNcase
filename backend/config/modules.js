const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')



module.exports = server => {
  require('dotenv').config()
  server.use(helmet)
  server.use(morgan('dev'))
  server.use(express.json())
}