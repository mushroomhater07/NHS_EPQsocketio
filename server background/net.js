// const net1 = require('net');
// const port = 8888;

// const server = net1.createServer(whenconnect);

// //register
// server.listen(port, ()=>
//     console.log(`server ${port} listening on`)
// );
// function whenconnect(ipaddress){
//     console.log(`server ${ipaddress.remoteAddress}:${ipaddress.remotePort}`);
//     ipaddress.on('data',function(data){
//         //Log data received from the client
//         console.log(`>> data received : ${data} `);
//         ipaddress.end();
//     });
//     ipaddress.on('close',function(){
//         console.log(`${ipaddress.remoteAddress}:${ipaddress.remotePort} Connection closed`);
//     });
    
// 	//Handle Client connection error.
//     ipaddress.on('error',function(error){
//         console.error(`${ipaddress.remoteAddress}:${ipaddress.remotePort} Connection Error ${error}`);
//     });

    
// }