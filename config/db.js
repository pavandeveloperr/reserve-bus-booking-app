const mongoose = require('mongoose');
const colors = require('colors');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Server Connected to Mongodb Database ${mongoose.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.log(`MongoDB Error ${error}`.bgRed.white)
    }
}

module.exports = connectDB;