import mysql from "mysql2"

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    

});
db.connect((error)=>{
    if(error){
       console.log("error occured connected");
    }
    else{
        console.log(" connected ");
    }
})
//create database
    const sql="CREATE DATABASE l5sod";
    db.query(sql, (result)=>{
        if(result){
            console.log("created")
        }
        else{
            console.log("no created")
        }
    })
    // create table 
    db.query("use l5sod",(err)=>{
        const sql="CREATE table user(id int auto_increment primary key,username varchar(55),password varchar(200))";
        db.query(sql, (err)=>{
            if(err){
                console.log("create table:",err);
            }
            else{
                console.log("table create")
            }
        })
        //inseert
        const VALUES=[['kevinpro','kade'],['we','user'],['we','user']]
        const insert="INSERT INTO user(username,password)VALUES?";
        db.query(insert,[VALUES],(err)=>{
            if(err){
                console.log("not inserted")
            }
            else{
                console.log("ye data inserted")
            }
        })
        
    })

export default db;
