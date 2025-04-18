import bcrypt from "bcryptjs"
import token_login from "../../tokens/token_roleslogin/loginToken.js"

const admin_controller=async(req,res)=>{
    try {
        if(!await bcrypt.compare(req.body.password,req.data.password))  
        {
            return res.status(404).send("Invalid Email ID or Password")
        }
        return token_login(req,res)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default admin_controller