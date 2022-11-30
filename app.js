
const express = require('express')
const app=express()

const PORT =5001
const connectDB=require('./db/db.config')

const DataBaseUrl=process.env.DataBaseUrl || "mongodb://localhost:27017"

connectDB(DataBaseUrl)

app.use(express.json())

const postUserController = require('./routes/postUserRoute')

const getUserRoute =require('./routes/getUserRoute')
const getAllUserRoute = require('./routes/getAllUerRoute')
const deleteUserRoute = require('./routes/deleteUserRoute')
const putuserRoute = require('./routes/putUserRoute')

 app.use('/api',postUserController)
 app.use('/api',getUserRoute)
 app.use('/api',getAllUserRoute)
 app.use('/api',deleteUserRoute)
 app.use('/api',putuserRoute)


app.listen(PORT,()=>{
     console.log("Connect port ",PORT)
})