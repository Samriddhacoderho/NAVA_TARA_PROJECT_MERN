import express from "express";
import connectTo from "./database/mongo_conn.js";
import { configDotenv } from "dotenv";
import cors from "cors"
import cookieParser from "cookie-parser";
import fetch_teachers from "./routes/admin_accessible_routes/FetchTeachers.js";
import updateRoutine from "./routes/admin_accessible_routes/UpdateRoutine.js";
import get_student from "./routes/admin_accessible_routes/students_data/GetStudents.js";
import get_fee from "./routes/admin_accessible_routes/fees/GetFeeRecord.js";
import class_fee_struct from "./routes/admin_accessible_routes/fees/ClassFeeStructure.js";
import edit_record_fee from "./routes/admin_accessible_routes/fees/EditRecordFee.js";
import create_teacher from "./routes/admin_accessible_routes/accounts_creation_route/CreateTeacher.js";
import create_student from "./routes/admin_accessible_routes/accounts_creation_route/CreateStudent.js";
import admin_notice_route from "./routes/admin_accessible_routes/notice/AdminNoticeRoute.js";
import edit_student from "./routes/admin_accessible_routes/students_data/EditStudent.js";
import fetch_routine from "./routes/routines/FetchRoutine.js";
import getNotice from "./routes/notice/GetNotice.js";
import loginRoute from "./routes/login_logout/LoginRoute.js";
import logoutRoute from "./routes/login_logout/LogoutRoute.js";
import get_salary from "./routes/admin_accessible_routes/salary_payroll/SalaryView.js";
import create_admin from "./routes/admin_accessible_routes/accounts_creation_route/CreateAdmin.js";
import email_ask_Route from "./routes/reset_password/email_ask.js";
import mongoose from "mongoose";
import salary_edit from "./routes/admin_accessible_routes/salary_payroll/SalaryEdit.js";
import contactRoute from "./routes/contact/ContactRoute.js";
import tokenVerify from "./tokens/token_verify.js";
import delete_student from "./routes/admin_accessible_routes/accounts_deletion/StudentDelete.js";
import delete_teacher from "./routes/admin_accessible_routes/accounts_deletion/TeacherDelete.js";

configDotenv()

const app=express()
console.clear()

//middlewares
app.use(express.json())
app.use(cors(
    {
        origin:[process.env.URI_FRONTEND],
        methods:["GET","POST","PATCH","DELETE"],
        allowedHeaders:["Content-Type","Authorization"],
        exposedHeaders:["Content-Type","Authorization"],
        credentials:true
    }
))
app.use(cookieParser())

app.use(express.static("public/notice_files"))


//routes

app.get("/",tokenVerify,(req,res)=>{
    res.send("Authorized Access");
}
)

app.use("/contact",contactRoute);  //route for contact form submission

app.use("/",loginRoute);  //route for login before role distribution:

app.use("/",logoutRoute)  //routes for logout

app.use("/getTeachers",fetch_teachers)  //route for getting all teacher's data from admin's account while viewing routines.


app.use("/admin",admin_notice_route)  //route for notice creation from admin's account


app.use("/get",getNotice)  //route for notices fetching.


app.use("/fetch",fetch_routine)  //route for routines fetch by either teacher or admin

app.use("/updateRoutine",updateRoutine)  //route for updating routine from admin's account

app.use("/create",create_teacher)  //route for creating teacher from admin's account
app.use('/deleteTeacher',delete_teacher)  //route for deleting teacher from admin's account

app.use("/create",create_admin)  //route for creating admin from admin's account

app.use('/create',create_student)  //route for creating student from admin's account

app.use("/deleteStudent",delete_student)  //route for deleting student from admin's account

app.use("/getStudents",get_student)  //route for getting all students from admin's or teacher's account

app.use("/editStudent",edit_student);  //route for editing particular student from admin's account

app.use("/getFee",get_fee)  //route for getting student fee records from admin's account

app.use("/editFee",edit_record_fee)  //route for editing student fee record from admin's account


app.use("/fetch/class",class_fee_struct)  //route for getting class fee ko structure from admin's account

app.use("/getSalary",get_salary)  //route for getting teacher salary record from admin's account
app.use("/editSalary",salary_edit)  //route for editing teacher salary records from admin's account

app.use("/reset/password",email_ask_Route)  //route for resetting password whilst from the login form


connectTo();

app.listen(process.env.PORT,()=>console.log("successfully listening"))