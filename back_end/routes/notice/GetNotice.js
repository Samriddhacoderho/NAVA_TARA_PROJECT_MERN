import express from "express"
import noticeFetchController from "../../controllers/noticeFetch/notice_fetch_controller.js"

const getNotice=express.Router()

getNotice.get("/notices",noticeFetchController)
getNotice.get("/notices/teachers",noticeFetchController)
getNotice.get("/notices/admins",noticeFetchController)
getNotice.get("/notices/students",noticeFetchController)
export default getNotice