import userRouter from './user.js'
import studentRouter from './student.js'
const routes =(app)=>{
    //router 
// get : quest data
// post : create or update data
//put : update full field else will undefind
// patch : update only pass  field you want pass
// delete : delete data
    app.use('/user',userRouter)
    app.use('/student',studentRouter)
    app.get('/',(req,res)=>{
        res.render('home')
    }) 
    
   
}
export default routes