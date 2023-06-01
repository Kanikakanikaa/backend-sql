const express= require("express");
require("./connection")
const app= express();
const port =8080;
const oneOne=require("./relations/oneToOne");
const many=require("./relations/manyToMany");
const dataAdd=require("./addUser");
const Scope=require("./scopes");
const polymorphic=require("./polymorphic/one to many")
app.get("/",function(req,resp){
    resp.send("home1")
});
app.get("/addPost",async (req, res, next) => {
 const dataPosts = await dataAdd.addPosts();
   res.send(JSON.stringify(dataPosts))
});

app.get("/addUser", async (req, res, next) => {
    const data = await dataAdd.addUsers();
   res.send(JSON.stringify(data))
});
app.get("/addTags", async (req, res, next) => {
    const data = await dataAdd.addTags();
   res.send(JSON.stringify(data))
});
app.get("/addEmploye", async (req, res, next) => {
    const data = await dataAdd.addEmploye();
   res.send(JSON.stringify(data))
});

 app.get("/one-to-one", async (req, res, next) => {
     const data = await oneOne.oneToOne();
    res.send(JSON.stringify(data))
 });
 app.get("/one-to-many", async (req, res, next) => {
    const data = await oneOne.oneToMany();
   res.send(JSON.stringify(data))
});
app.get("/many-to-many", async (req, res, next) => {
    const data = await many.manyToMany();
   res.send(JSON.stringify(data))
});
app.get("/scope", async (req, res, next) => {
    const data = await Scope.Scope();
   res.send(JSON.stringify(data))
});
app.get("/one-to-many-polymorphic", async (req, res, next) => {
    const data = await polymorphic.oneToMany();
   res.send(JSON.stringify(data))
});

app.listen(port,()=>{
    console.log(`App is running at port ${port}`)
})