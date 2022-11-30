const userModel = require("../model/User")


const putUserController = async (req, res) => {
     const userId = req.params.userId
     console.log(userId)
     try { 

          const data = await userModel.updateOne({'userId':req.params.userId} , {
           
               userName: req.body.userName,
               email: req.body.email,
               password: req.body.password
          })

          
     } catch (error) {
          console.log(error)
     }
}

module.exports = putUserController