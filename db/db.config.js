const mongoose = require('mongoose')

 const connectDB=(DataBaseUrl)=>{
     const DatabaseName={
          dbName:'User'
     }
     try {
          mongoose.connect(DataBaseUrl,DatabaseName)
          console.log("connect sucessfully ...!")
     } catch (error) {
          console.log(error)
     }
 }

 module.exports = connectDB