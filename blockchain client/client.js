const {io} =require("socket.io-client");
var fs = require('fs');
const port = 5050;
const host = "localhost";
const socket = io(`http://${host}:${port}`);

socket.on('connect', ()=>
console.log(`${socket.id}`)
);
socket.on("gettag", (data) =>
 console.log(data));
socket.on('save-data',(data)=>
console.log(data)
);
if( !err )
fs.readFile('readMe.txt', 'utf-8', function(err, data) {
fs.writeFile('writeMe.txt', data, (err)=>{
    if( err ) {
        throw err;
    }else{throw err;}
});
});