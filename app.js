
const express = require('express')
const app=express()

const PORT =5001
const connectDB=require('./db/db.config')

const DataBaseUrl=process.env.DataBaseUrl || "mongodb://localhost:27017"

connectDB(DataBaseUrl)

app.use(express.json())

const postUserController = require('./routes/postUserRoute')

const getUserRoute =require('./routes/getUserRoute')

 app.use('/api',postUserController)
 app.use('/api',getUserRoute)


app.listen(PORT,()=>{
     console.log("Connect port ",PORT)
})