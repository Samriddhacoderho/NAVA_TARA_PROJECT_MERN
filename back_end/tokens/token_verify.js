import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";

configDotenv()

const tokenVerify=async(req,res,next)=>{
    try {
        if(req.cookies.teacherToken)
        {
            const data=jwt.verify(req.cookies.teacherToken,process.env.SECRET_KEY);
            req.user=data.user
            req.teacher=req.cookies.teacherToken;
            next()
        }
        else if(req.cookies.adminToken)
        {
            const data=jwt.verify(req.cookies.adminToken,process.env.SECRET_KEY)
            req.user=data.user
            req.admin=req.cookies.adminToken;
            next()
        }
        else if(req.cookies.studentToken)
        {
            const data=jwt.verify(req.cookies.studentToken,process.env.SECRET_KEY);
            req.user=data.user
            req.student=req.cookies.studentToken;
            next()
        }
        else
        {
            res.status(404).send("Unauthorized Access")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}


export default tokenVerify