const userModel = require("../model/User")



const getAllUserController = async(req,res)=>{

     try {
          const response = await userModel.find()
          res.send(response)
     } catch (error) {
          console.log(error)
     }
}

module.exports=getAllUserController