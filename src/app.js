
const express=require('express');
const app=express();
const port = process.env.PORT || "3000"; //get autometic port number when app get hosted in the server. 
const path=require('path');
const hbs=require('hbs');

const spath=path.join(__dirname,"../public"); //giving path
const templatePath=path.join(__dirname,"../templates/views");
const partialPath=path.join(__dirname,"../templates/partials");


app.set('view engine', 'hbs'); //setting view engine

app.set("views",templatePath); //views is included in templates folder 

app.use(express.static(spath)); //serving all static html page included in public folder

hbs.registerPartials(partialPath); //register partial with hbs



app.get("/",(req, res)=>{       //Routing
    // res.send("/");
    res.render("index");        //render hbs
});

app.get("/about",(req, res)=>{
    // res.send("this is About Page");
    res.render("about"); 
});

app.get("/weather",(req, res)=>{
    res.render('weather');
});

app.get("*",(req, res)=>{
    res.render("error",{
        errorMsg:"Opps!! Page Not Found"
    });
});











app.listen(port,()=>{
    console.log(`listening to port:${port} ('_')`);
});
