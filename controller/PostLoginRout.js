const userModel = require("../model/User")


const postLoginRoute = async (req, res) => {

     const email = req.body.email
     const password = req.body.password 
     console.log(email,password)
 
    

     try {
          const user = await userModel.findOne({'email':email})
              
         if(user){
            if(user.password===password){
               // res.json({status:200,isLogin:true,message:'login sucessfully'})
               if(user.status==="active"){
                    res.status(200).json({
                    status:200,
                    isLogin:true,
                    message:'login sucessfully'
                  }) 
               }else{
                    res.status(400).json({
                         status:400,
                         isLogin:false,
                         message:"acount block on 24 hour's"
                       })  
               }
               
            }else{
               res.status(400).json({
                    status:400,
                    isLogin:false,
                    password:false,
                    userId:user.userId,
                    message:'password is not match'
                  })  
            }
         }else{
          res.status(400).json({
               status:400,
               isLogin:false,
               message:"User doesn't exist"
             })  
         }
     } catch (err) {
          res.status(400).json({
               status:400,
               isLogin:false,
               message:"User doesn't exist"
             }) 
     }
}

module.exports=postLoginRoute