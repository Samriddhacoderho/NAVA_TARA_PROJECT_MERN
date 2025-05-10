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
import updateRoutine from "./routes/UpdateRoutine.js";
import create_teacher from "./routes/CreateTeacher.js";
import create_student from "./routes/CreateStudent.js";
import get_student from "./routes/GetStudents.js";
import edit_student from "./routes/EditStudent.js";
import get_fee from "./routes/GetFeeRecord.js";
import classFee_model from "./database/mongoose_schema/class_fee_schema.js";

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

app.use("/admin",admin_notice_route)  //route for admin ko notice creation


app.use("/get",getNotice)  //route for notice fetching


app.use("/fetch",fetch_routine)  //route for routines fetch

app.use("/updateRoutine",updateRoutine)  //route for updating routine

app.use("/create",create_teacher)  //route for creating teacher

app.use('/create',create_student)  //route for creating student

app.use("/getStudents",get_student)  //route for getting all students

app.use("/editStudent",edit_student);  //route for editing particular student

app.use("/getFee",get_fee)  //route for getting student fee records

// app.post("/test",async(req,res)=>{
//     try {
//         const result=await classFee_model.create({studentID:"681cbc4283e719d9d2ad0207",records:{Baishakh:{adm_fee:2500,month_fee:2000,comp_fee:400}}})
//         res.send("Nice")
//     } catch (error) {
//         res.status(504).send(error.message);
//     }
// })



connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))