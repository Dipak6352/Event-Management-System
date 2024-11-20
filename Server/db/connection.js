const mongoose = require('mongoose')

const connectDB = async()=>{
   try {
    const con = await mongoose.connect(`mongodb+srv://suthardipak2004:1234@cluster0.j74sej5.mongodb.net/dipak`)
    console.log("DB connected successfully")
   } catch (error) {
        console.log(error , "Connection Error")
   }
}

module.exports = connectDB  