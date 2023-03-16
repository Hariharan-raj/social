import express from "express";
const loginrouter = express.Router();
import * as usercontroller from "../controller/usercontroller.js";
// import { loginuser, getuserdetails } from "../controller/usercontroller.js";

loginrouter.post("/login", usercontroller.loginuser);
loginrouter.get("/users", usercontroller.getuserdetails);
loginrouter.put("/users/:id", usercontroller.updateuserdetails);
loginrouter.delete("/users/:id", usercontroller.deleteuserdetails);

export default loginrouter;
