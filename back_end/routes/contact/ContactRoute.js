import express from "express";
import contact_model from "../../database/mongoose_schema/contact_schema.js";

const contactRoute = express.Router();

contactRoute.post("/message", async (req, res) => {
    try {
        const result=await contact_model.create(req.body);
        res.send("Message sent successfully");
    } catch (error) {
        res.status(504).send(error.message);
    }
});

export default contactRoute;