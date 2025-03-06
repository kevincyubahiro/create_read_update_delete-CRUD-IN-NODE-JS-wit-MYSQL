import db from "./connect.js";
import express from "express";
const  app=express();
app.get('/', (req,res)=>{
    res.send("HELLO THERE APP IS STARTED")
})
app.listen(2000,()=>{
    console.log("app is running on http://localhost:2000")
});