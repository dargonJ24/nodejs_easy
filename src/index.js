

import express, { Router } from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';
const app=express()
const port=3000
// setup static file
app.use(express.static('src/public'))
//setup use handlebars

app.engine('.hbs',engine({extname:'.hbs'})) // use exention hbs of handlebars
app.set('view engine','hbs')
app.set('views','./src/views')
// 



routes(app)
app.listen(port,()=>{
    console.log('server is running in port:', port)
})