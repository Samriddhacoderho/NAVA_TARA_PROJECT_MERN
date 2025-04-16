import express from "express";
import connectTo from "./database/mongo_conn.js";
import router_teachersLogin from "./routes/teachers_routes/loginTeacher_route.js";
import { configDotenv } from "dotenv";
import cors from "cors"
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

//routes for teacher's login:
app.use("/teachers",router_teachersLogin);

connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))