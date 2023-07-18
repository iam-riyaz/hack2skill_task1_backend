import mongoose  from "mongoose";

const data2Schema = new mongoose.Schema({
    full_name:{type:String},
    email:{type:String},
    team_name:{type:String},
})

export const Data2= mongoose.model("data_2",data2Schema)