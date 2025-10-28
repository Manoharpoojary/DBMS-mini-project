import dotenv from "dotenv"
import { db } from "./db/index.js";
import { app } from "./app.js";


dotenv.config({path:"./.env"})

db.connect()
.then(()=>{
    console.log("Connection to PG Admin established successfully... ")
})
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server Listening on Port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Error connecting to PG admin: ",err.message)
    process.exit(1)
});


