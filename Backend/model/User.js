const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],

    },
    email:{
        type:String,
        required:[true,"email is required"],
        unique:true,
        match: [
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
            "Please provide a valid email address",
          ],
    },
    password:{
        type:String,
        required:[6 ,"password should be greater than 6"],
        select:false
    },
    favoriteTeams: {
        type: [String],
        default: [],
      },
      role:{
        type:String,
        enum:["user","admin"],
        default:"user"
      }
},{
    timpstamps:true
})
UserSchema.pre('save',async(next)=>{
    if(!this.isModified("password"))return next();
    this.password=await bcrypt.hash(this.password,10);
    return next();
})
const user=mongoose.model("User",UserSchema);
module.exports=user