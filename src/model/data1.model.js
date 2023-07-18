import mongoose  from "mongoose";

const data1Schema = new mongoose.Schema({
    full_name:{type:String},
    email:{type:String},
    number:{type:Number},
    city:{type:String},
    url:{type:String}
})

export const Data1=mongoose.model("data_1",data1Schema)