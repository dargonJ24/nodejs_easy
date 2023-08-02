import express from "express"
import { StudentControler } from "../controller/studentController.js"

const router =express.Router()
router.get('/details',(req,res)=>{
    res.send("Student details")
})
router.get('/',StudentControler
)
export default router