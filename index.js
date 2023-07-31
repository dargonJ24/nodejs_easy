const express =require("express")
const app=express()
const port=3000
//router 
// get : quest data
// post : create or update data
//put : update full field else will undefind
// patch : update only pass  field you want pass
// delete : delete data
app.get('/',(req,res)=>{
    res.send('hello world')
})  
app.get('/user/:id',(req,res)=>{
    res.send('hello you')
})  
app.listen(port,()=>{
    console.log('server is running in port:', port)
})