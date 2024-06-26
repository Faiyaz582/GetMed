import express from "express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import mongoose, { mongo } from "mongoose"
import dotenv from 'dotenv'
import authRoute from "./Routes/auth.js"

dotenv.config ()

const app = express()
const port = process.env.PORT || 8000

const corsOptions = {
    origin:true
}

app.get('/',(req,res)=>{
    res.send ('Api is working')
});

//database connection
mongoose.set('strictQuery', false)
const connectedDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        console.log('MongoDB database is connected')

    } catch (err){
        console.log('MongoDB database has failed connection')
    }
};

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute) 

app.listen (port, () =>{
    connectedDB();
    console.log('Server is running on port'+ port);
})