const express =require("express");
// const { title } = require("process");
require("dotenv").config();
const app=express();

const path=require("path");

app.set("view engine","ejs");
app.set("views","views");


app.use(express.static(path.join(__dirname,"public")));


app.get("/",(req,res)=>{
    res.render("index")
});


const port=process.env.PORT ||5000
app.listen(port, () => {
    console.log(`Server is running @ http://localhost:${port}`)
});
