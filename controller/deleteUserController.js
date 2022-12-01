const userModel = require("../model/User")


const deleteUserController =async(req,res)=>{
const userId = req.params.userId 
try {
     const response =  await userModel.deleteOne({"userId":userId})
     res.send(response)
} catch (error) {
     
}
     
}

module.exports =deleteUserController