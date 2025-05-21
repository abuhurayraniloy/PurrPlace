import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";

const app = express();

app.use(cors ({
    origin: 'http://localhost:5173' ,
    methods: ["GET" , "PUT" ,"DELETE" ,"POST"],
    credentials: true ,
    optionSuccessStatus:200,
  
  })) ;
app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);

app.listen(8800, ()=>{
    console.log("Server is running!")
});
