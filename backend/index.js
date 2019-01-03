const server = require('./server')

const PORT = process.env.PORT || 8000
server.listen(PORT, () => console.log(`API running on Port ${PORT}`))