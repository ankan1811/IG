const express = require("express")
var router = express.Router();
const userController=require("../controllers/userController")


router.post("/postuser",userController.saveUser)
router.get("/getuser",userController.getallUsers)


module.exports=router