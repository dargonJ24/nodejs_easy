import mongoose from "mongoose"; 
const {Schema} =mongoose;
const userSchema = new Schema({
  userName :{
    type: String,
    require:true,
    unique:true,
  },
  password:{
    type:String,
    require:true,
  },
  name:{
   type: String,
   require:true,
   unique:true,
  }
});
export const user=mongoose.model('User',userSchema)