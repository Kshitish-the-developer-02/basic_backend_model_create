import mongoose from 'mongoose'
const worksInHospitalsSchema= new mongoose.Schema({
    hospitalName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'hospitals'
    },
    workingTime:{
        type:Number,
        default:0,
        required:true
    }
}

)
const doctorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        default:0
    },
    worksInHospitals:[worksInHospitalsSchema]
},{timestamps:true})

export const doctor=mongoose.model("doctor",doctorSchema)