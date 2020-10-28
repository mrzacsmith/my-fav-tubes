const mongoose = require('mongoose')
require('colors')

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log(`** MongoDB Connected: ${connect.connection.host}\n`.rainbow)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
