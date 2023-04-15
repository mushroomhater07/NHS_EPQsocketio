const port = 5050;
const io = require('socket.io')(port);
//cors:{ origin:[localhost],},}

io.on('connection',(socket) =>{
    //console.log(socket.handshake.address);
    console.log(`${socket.request.connection.remoteAddress}:${socket.request.connection.remotePort}`)
    console.log(socket.id);
    io.to(socket.id).emit("gettag", )
})


