const userModel = require("../model/User")


const putUserController = async (req, res) => {
     const userId = req.params.userId
     try {

          const data = await userModel.updateOne({ 'userId': req.params.userId }, {

               userName: req.body.userName,
               email: req.body.email,
               password: req.body.password,
               status: req.body.status
          })
          res.status(200).send({ status: 200, message: "update data" });

          const UnblockFunction = async(userId) => {
              console.log("setTimeout :",userId)
               let status='active'
               const result = await  userModel.updateOne({ 'userId':userId }, {
                    status:status
               })  

          }
          if (req.body.status === "block") { 
               console.log("acount is block")
               setTimeout(()=>{
                    UnblockFunction(userId)
                  },86400000) 
          }


     } catch (error) {
          console.log(error)
     }
}

module.exports = putUserController