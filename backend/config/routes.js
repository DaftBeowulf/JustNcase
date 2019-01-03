const user = require('../api/userRouter')

module.exports = server => {
  server.use('/user', user)
}