import express from "express";


import { crtuser, deluserbyid, infoall, userbyid } from "../controller/user.js"; 

const router = express.Router();

router.post("/new", crtuser)


router.get("/all", infoall)


router.route("/:id").get( userbyid).delete(deluserbyid)


export default router; 
 