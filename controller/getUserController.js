const userModel = require("../model/User")


const getUserController = async (req, res) => {

     const userName = req.params.userName
     const password = req.params.password
     console.log(userName, password)

     try {
        const data = await userModel.aggregate([{$match:{userName:userName,password:password}}])
        res.send(data)
     } catch (err) {
          console.log(err)
     }
}

module.exports=getUserController