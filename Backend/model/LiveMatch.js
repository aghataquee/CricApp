const mongoose=require('mongoose');
const LiveMatchSchema=new mongoose.Schema({
    matchId:{
        type:String,
        required:true,
        unique:true
    },
    series:{
        type:String,
        required:true
    },
    teams:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    matchType:{
        type:String,
        enum:["ODI","T20","Test","IPL"],
        required:true
    },
    status:{
        type:String,
        required:true,
        enum:["Upcoming","Live","Completed"]

    },
    score:{
        team1:{
            type:String,
            default:""
        },
        team2:{
            type:String,
            default:""
        }
    },
    toss:{
        winner:String,
        decision:String
    },
    result:{
        type:String,
        default:"",

    },
    currentInning: {
        type: String,
        default: "",
      },
      commentary: {
        type: [String],
        default: [],
      },
},{
    timestamps:true
})
const LiveMatch=mongoose.model(LiveMatch,"LiveMatchSchema");
module.exports=LiveMatch;