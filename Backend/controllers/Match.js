const Match=require('../model/LiveMatch');
exports.createMatch=async(req,res)=>{
    try{
        const match=await Match.create(req.body);
        res.status(201).json(match);
    }
    catch(error){
        res.status(401).json(error);
    }
}
exports.getMatches=async(req,res)=>{
    try{
        const matches=await Match.find().sort({date:-1});
        res.status(201).json(matches);
    }
    catch(error){
        res.status(401).json(error);
    }
}
exports.getMatchesById=async(req,res)=>{
    try{
        const match=await Match.findById(req.params.id);
        if(!match){
            res.status(201).json({
                message:"Match not found"
            })
        }
    }
    catch(error){
        res.status(401).json(error);
    }
}
exports.updateMatch=async(req,res)=>{
    try{
        const match=await Match.findByIdAndUpdate(req.params.id,req.body);
        if(!match){
            res.status(400).json("match not updated")
        }
        res.status(201).json(
            match)
    }
    catch(error){
        res.status(401).json(error);
    }
}
exports.deleteMatch=async(req,res)=>{
    try{
        const match=await Match.findByIdAndDelete(req.params.id);
        if(!match){
            res.status(401).json("Match not found")
        }
        res.status(201).json("Match deleted successfully")
    }
    catch(error){
        res.status(401).json(error);
    }
}