import express from "express";
import userrouter from "./routes/user.js"
import { connectdb } from "./data/database.js";
import {config} from "dotenv";

const app = express();

config({path:"./config.env"})

connectdb()

// adding middleware to send or recive json data fron req.body
app.use(express.json())
app.use("/users",userrouter)


app.get("/", (req, res) => {
  res.send(" welcom to home api");
});



app.listen(process.env.PORT, () => {
  console.log("server is running");
});
 