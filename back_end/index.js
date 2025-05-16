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
import fetch_teachers from "./routes/FetchTeachers.js";
import updateRoutine from "./routes/UpdateRoutine.js";
import create_teacher from "./routes/CreateTeacher.js";
import create_student from "./routes/CreateStudent.js";
import get_student from "./routes/GetStudents.js";
import edit_student from "./routes/EditStudent.js";
import get_fee from "./routes/GetFeeRecord.js";
import class_fee_struct from "./routes/ClassFeeStructure.js";
import edit_record_fee from "./routes/EditRecordFee.js";

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


//routes

app.use("/",loginRoute);  //route for login before role distribution:

app.use("/",logoutRoute)  //routes for logout

app.use("/getTeachers",fetch_teachers)  //route for getting all teacher's data from admin's account while viewing routines.


app.use("/admin",admin_notice_route)  //route for notice creation from admin's account


app.use("/get",getNotice)  //route for notices fetching.


app.use("/fetch",fetch_routine)  //route for routines fetch by either teacher or admin

app.use("/updateRoutine",updateRoutine)  //route for updating routine from admin's account

app.use("/create",create_teacher)  //route for creating teacher from admin's account

app.use('/create',create_student)  //route for creating student from admin's account

app.use("/getStudents",get_student)  //route for getting all students from admin's or teacher's account

app.use("/editStudent",edit_student);  //route for editing particular student from admin's account

app.use("/getFee",get_fee)  //route for getting student fee records from admin's account

app.use("/editFee",edit_record_fee)  //route for editing student fee record from admin's account


app.use("/fetch/class",class_fee_struct)  //route for getting class fee ko structure from admin's account

connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))