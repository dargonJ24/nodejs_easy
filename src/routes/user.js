import express from "express"
import { createuserController, userController } from "../controller/userController.js"
const router =express.Router()
router.get("/details",(req,res)=>{
    res.send('user details page')
})
router.get("/",(req,res)=>{
    res.send('user  page')
})
router.post("/",createuserController)
export default router