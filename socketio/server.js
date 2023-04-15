const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require ("socket.io")(server, {cors:{origin:"*"}});
const port = 3000;
app.set("view engine", "ejs");
app.get("/", (req,res)=>{
    res.render("index");
});
server.listen(port, ()=>{console.log("port" + port)});
io.on("connection", (socket)=>{
    console.log(socket.id);
    socket.on("message", (message)=>{
        console.log(message);
    })
})
