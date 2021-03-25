const express = require('express');
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);
const PORT = 3000;

io.on("connection",(socket)=>{
    // console.log(socket);
    // console.log(socket.id);

    socket.on("disconnect",()=>{
        console.log("X desconectou: "+socket.id);
    });

    socket.on("msg",(data)=>{
        // socket.emit("showmsg",data)
        io.emit("showmsg",data)
        //ou socket.broadcast.emit()
        console.log(data);
    })

    
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index");
});


http.listen(PORT,()=>{
    console.log(`Servidor rodando na porta ${PORT}`);
});

