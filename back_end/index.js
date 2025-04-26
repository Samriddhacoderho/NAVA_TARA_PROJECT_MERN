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

//routes for admin
app.use("/admin",admin_notice_route)  //route for admin ko notice creation


app.use("/get",getNotice)  //route for notice fetching

app.use("/fetch",fetch_routine)  //route for routines

connectTo()

app.listen(process.env.PORT,()=>console.log("successfully listening"))