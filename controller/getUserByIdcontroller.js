
const userModel = require('../model/User')

const getUserByIdController = async (req, res) => {
     try {
      const result = await userModel.find({"userId":req.params.userId})
      res.send(...result)
     
     }
     catch (err) {
          console.log(err)
     }
}

module.exports = getUserByIdController