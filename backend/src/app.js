import express from "express"
import bodyParser from "body-parser";
import cookieParser from "cookie-parser"
import cors from 'cors'

const app=express();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
}))

app.use(bodyParser.urlencoded({extended:true,limit:"20kb"}))
app.use(bodyParser.json({limit:"20kb"}))
app.use(cookieParser())
app.use(express.static("public"))

//routes establishment
import UserRouter from "./routes/user.route.js";

app.use("/api/v1/user",UserRouter)

export {app}

