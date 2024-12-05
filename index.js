const express = require('express');
const db=require("./connection/db");
const bodyParser=require('body-parser');

const path=require("path");
const { listSchool, addSchool } = require('./controllers/controllers');
const { addRouter } = require('./routes/addRoutes');
const { listRouter } = require('./routes/listRoutes');
const app=express();

app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
app.set("views", path.join("./","views"));

app.get("/", async (req,res)=>{
    res.render("home");
});
// app.use("/addSchool",addRouter);

// app.use("/listSchool",listRouter);

app.get("/addSchool", (req,res)=>{
    res.render("add");
});

app.post("/addSchool",addSchool);

app.get("/listSchool",(req,res)=>{
    res.render("list");
});

app.post("/listSchool",listSchool);

app.listen(3000,()=>{
    console.log("server started at 3000");
});