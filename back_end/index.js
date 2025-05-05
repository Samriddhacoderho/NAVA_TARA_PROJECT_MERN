import express from "express";
import connectTo from "./database/mongo_conn.js";
import { configDotenv } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import loginRoute from "./routes/LoginRoute.js";
import logoutRoute from "./routes/LogoutRoute.js";
import admin_notice_route from "./routes/AdminNoticeRoute.js";
import getNotice from "./routes/GetNotice.js";
import fetch_routine from "./routes/FetchRoutine.js";
import get_id from "./routes/GetID.js";
import fetch_teachers from "./routes/FetchTeachers.js";
import teachersSchema_model from "./database/mongoose_schema/teachers_schema.js";
import jwt from "jsonwebtoken";
import routine_schema from "./database/mongoose_schema/routine_schema.js";
import updateRoutine from "./routes/UpdateRoutine.js";
import create_teacher from "./routes/CreateTeacher.js";
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

app.use(express.static("public/notice_files"))

//routes for login before role distribution:
app.use("/",loginRoute);

//routes for logout
app.use("/",logoutRoute)

//route for getting id from token
app.use("/getid",get_id)

//route for getting all teachers ko data
app.use("/getTeachers",fetch_teachers)

//test route for creating teachers
app.post("/teachers",async(req,res)=>{
    try {
        const result=await teachersSchema_model.create(req.body)
        const user={
            id:result._id
        }
        const token=jwt.sign(user,process.env.SECRET_KEY);
        res.cookie("teacherToken",token,{
            secure:true,
            sameSite:"strict"
        })
        const result_create=await routine_schema.create({teacherID:result._id})
        res.send("Done");
    } catch (error) {
        console.log(error.message);
    }
})


app.use("/admin",admin_notice_route)  //route for admin ko notice creation


app.use("/get",getNotice)  //route for notice fetching


app.use("/fetch",fetch_routine)  //route for routines fetch

app.use("/updateRoutine",updateRoutine)  //route for updating routine

app.use("/create",create_teacher)


connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))