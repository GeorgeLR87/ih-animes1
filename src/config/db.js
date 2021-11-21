const mongoose = require('mongoose')

const connectDB = async() => {
    await mongoose.connect(process.env.MONGODB)
    console.log('Data base connected')
}

module.exports = connectDB