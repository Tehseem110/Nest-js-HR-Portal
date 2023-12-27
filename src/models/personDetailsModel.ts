
import mongoose  from "mongoose";


const PersonDetailSchema = {
    Name:{type:String,required:true},
    FatherName:{type:String},
    ContactNo:{type:Number},
    EmailId:{type:String},
    MaritalStatus:{type:String},
    PermanentAddress:{type:String},
    TemporaryAddress:{type:String},
    EmergencyNumber:{type:Number},
    GuardianName:{type:String},
    GuardianContactNo:{type:Number},
    WorkExperience:{type:Number},
    PanCard:{type:String},
    AadharCard:{type:Number},
    AccountNo:{type:Number},
    Ifsc:{type:String},
    Branch:{type:String},
    PanFile:{fileId:String,url:String},
    AadharFile:{fileId:String,url:String},
    PassbookFile:{fileId:String,url:String}
}

const EducationSchema = {
    HighestEducation:{type:String},
    GraduationMarks:{type:String},
    HightSchoolMarks:{type:String},
    MatriculationMarks:{type:String},
    GraduationFile:{fileId:String,url:String},
    HSFile:{fileId:String,url:String},
    MatricFile:{fileId:String,url:String}
}

const OfficeDetailSchema = {
    EmploymentType:{type:String},
    Duration:{type:String},
    Department:{type:String},
    Designation:{type:String},
    EmployeCode:{type:String},
    Reference:{type:String},
    JoinDate:{type:String},
    OfficialEmail:{type:String},
    Salary:{type:Number},
    IdCard:{type:String}
}

const personSchema = new mongoose.Schema({
    PersonalDetails:{
        type:[PersonDetailSchema]
    },
    EducationDetails:{
      type:[EducationSchema]
    },
    OfficeDetails:{
        type:[OfficeDetailSchema]
    }
},{timestamps:true});

const PersonalDetailsModel = mongoose.models.PersonalDetails || mongoose.model('PersonalDetails', personSchema);

export default PersonalDetailsModel;