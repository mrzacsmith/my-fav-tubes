const express = require('express')
const colors = require('colors')

const server = express()

const PORT = process.env.PORT || 3333

server.listen(PORT, () => {
  console.log(`** Server is listening on port ${PORT}`.rainbow)
})
