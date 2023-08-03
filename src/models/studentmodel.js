import mongoose from "mongoose"; 
const {Schema} =mongoose;
const studentSchema = new Schema({
  name :{
    type: String,
    require:true,
    unique:true,
  },
  birthday:{
    type:Date,
    require:true,
  },
  mssv:{
   type: String,
   require:true,
   unique:true,
  },
  class:{
    type: String,
    unique:true,
  },
});
export const student=mongoose.model('Student',studentSchema)