const { Router } = require("express");
const userController=require("../controllers/userController");

const userRouter=Router();

userRouter.post("/create", userController.create )
userRouter.get('/view',userController.view)
userRouter.delete("/delete/:id",userController.deleteUser)
userRouter.put("/update/:id",userController.update)

module.exports=userRouter;

