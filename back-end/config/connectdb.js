const mongoose = require('mongoose')

require('dotenv').config()

const URI= process.env.MONGODB_URI

const connectDb = async()=>{
    try {
        await mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true })
        console.log("connected to the database")
    }
    catch(err){
console.log(err)
    }
}


module.exports = connectDb;