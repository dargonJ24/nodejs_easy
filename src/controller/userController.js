import {user} from '../models/usermodel.js'
import bcrypt from 'bcrypt'
export const userController =(req,res)=>{
    res.send("User page")
}
export const userDetailController=(req,res)=>{
    res.send("user details")
}
/*
step by step create user
1. must query data from client
2.check data valid before save database
3. if revice data dave database
4.return pass  user for client
*/
export const createuserController=async (req,res)=>{
    var {email,password,name}=req.body
    try{
        if(email && password && name)
        {
            const isEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(email)
            if(isEmail){
                const ischeckemail= await user.find({email:email})
                
                if(ischeckemail.length> 0){
                    return res.json({
                        status:'err',
                        message:'the name or user name is existed'
    
                    })
                }
                const hashPassword =bcrypt.hashSync(password,10)
                console.log('hashpassword',hashPassword)
                const newUser =await user.create({
                    email,
                    name,
                    password : hashPassword
                })
                //const {password, ...rest} =newUser
                return res.json({
                    status:"OK",
                    data: newUser
                })
            }
           
        }
        else{
         return  res.json({
            status: 'err',
            message: "email , password, name quire !!!"
         })
        }
    }catch(err){
        console.log(err)
        return res.json({
            status:'err',
            message:err
        })
    }

}