

import express from 'express';
import { engine } from 'express-handlebars';
const app=express()
const port=3000
// setup static file
app.use(express.static('src/public'))
//setup use handlebars

app.engine('.hbs',engine({extname:'.hbs'})) // use exention hbs of handlebars
app.set('view engine','hbs')
app.set('views','./src/views')
// 

//router 
// get : quest data
// post : create or update data
//put : update full field else will undefind
// patch : update only pass  field you want pass
// delete : delete data
app.get('/',(req,res)=>{
    res.render('home')
})  
app.get('/user/:id',(req,res)=>{
    res.send('hello you')
})  
app.listen(port,()=>{
    console.log('server is running in port:', port)
})