const userModel = require("../model/User")


const postUserController = async(req,res)=>{

     const postData = await userModel({
          userName:req.body.userName,
          email:req.body.email,
          password:req.body.password
     })

     postData.save(postData).then(res=>console.log(res))
}

module.exports = postUserController