import express from "express";
import connectTo from "./database/mongo_conn.js";
import { configDotenv } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import loginRoute from "./routes/LoginRoute.js";
configDotenv()

const app=express()
console.clear()

//middlewares
app.use(express.json())
app.use(cors(
    {
        origin:"http://localhost:5173",
        credentials:true
    }
))
app.use(cookieParser())

//routes for login before role distribution:
app.use("/",loginRoute);

connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))