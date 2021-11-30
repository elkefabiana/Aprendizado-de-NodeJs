const express =require("express");
const app =express();

app.get("/",function(req,res){
    res.send("<h1>Oi bb te amo</h1>");
});

app.get("/sobre",function(req,res){
    res.send("Eu aprendi isso facil");
});

app.get("/blog",function(req,res){
    res.send("Eu sou realmente foda");
});

app.get("/ola/:nome/:cargo/:nivel",function(req,res){
    res.send("<h1>Ola "+ req.params.nome+"</h1>"+"<h2>Seu cargo e "+ req.params.cargo+"</h2>"+"<h3>Seu nivel e "+ req.params.nivel+"</h3>");
    c
});

app.listen(8082, function(){
    console.log("Servidor rodando na url http://localhost:8082");
});
