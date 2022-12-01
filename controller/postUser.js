const userModel = require("../model/User")


const postUserController = async(req,res)=>{
const userId = (await userModel.find()).length + 1

const status=req.body.status?req.body.status:'active'
try {
     const postData = await userModel({
          userId: userId,
          userName:req.body.userName,
          email:req.body.email,
          password:req.body.password,
          status:status
     })

     postData.save(postData).then(resp=>res.json({status:200,message:'registretion sucessfully . !'}))
     .catch(err=>res.json({status:404,message:'Email is Already registered.!'}))
} catch (error) {
 res.send(error)
}
   
}

module.exports = postUserController