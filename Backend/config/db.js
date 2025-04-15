const mongoose=require('mongoose');
const DBConnection=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
      useUnifiedTopology: true,
        });
        console.log(`The database is connected to ${conn.connection.host}`);
    }
    catch(error){
        console.log("DB not Connected",error.message);
        process.exit(1);
    }
}
module.exports=DBConnection;