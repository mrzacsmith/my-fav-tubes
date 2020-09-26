const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const connectDB = require('./utils/db.js')

const VideoRouter = require('./routes/videos.js')

require('dotenv').config()
require('colors')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())

connectDB()

server.use('/api/videos', VideoRouter)

const currentTime = new Date().toLocaleString('en-US', {
  timeZone: 'America/Denver',
})

// @desc:   Server test
// @route:  GET /
server.get('/', (req, res) => {
  res.status(200).json({
    status: 'Success',
    message: 'Server is live!',
    data: currentTime + ' MST',
    author: 'Github: @mrzacsmith',
  })
})

const PORT = process.env.PORT || 3333

server.listen(PORT, () => {
  console.log(`\n** Server is listening on port ${PORT}`.rainbow)
})
