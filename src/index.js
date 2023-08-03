

import express, { Router } from 'express';
import { engine } from 'express-handlebars';
import routes from './routes/index.js';

import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const app=express()
const port=process.env.PORT
app.use(express.json())
// setup static file
app.use(express.static('src/public'))

//setup use handlebars
app.engine('.hbs',engine({extname:'.hbs'})) // use exention hbs of handlebars
app.set('view engine','hbs')
app.set('views','./src/views')

// connect mongoose
//console.log('dotenv',process.env.MONGO_DB)
mongoose.connect(process.env.MONGO_DB).then(()=>{
    console.log('Connect DB success')
})
.catch((err)=>{
    console.log(err)
})

routes(app)
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
})