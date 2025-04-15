const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const routes=require('./routes/userRoutes')
const DBConnection=require('./config/db');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
DBConnection();
app.use('/api/auth',routes);
const Port=4000;

app.listen(process.env.Port,()=>{
    console.log(`The server is running at port ${Port}`)
})
module.exports=app;