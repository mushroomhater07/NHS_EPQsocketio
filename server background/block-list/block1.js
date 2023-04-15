const crypt1 = require('crypto');
let crypto = require('crypto-js');
let fs = require('fs');

class Content{
    constructor(time, browser, clientip,email, commentid){
        this.timestamp = time;
        this.browseragent = browser;
        this.ip = clientip;
        this.email = email;
        this.commentid = commentid;
    }; 
}
class Block{
    constructor(index, prevhash, userid, hash, Content) {
        this.index = index;
        this.user = userid;
        this.prevhash = prevhash;
        this.detail = Content;
        this.thishash = hash;
    }
}
class blockchain{  //container for block only, not for saving anything new
    constructor(){
        this.chain = [this.start()]
    }
    start(){    return new Block(0, 0,0,0,null)}
    addNewBlock(Block1){
        // console.log(crypto.SHA256("jo").toString())
        Block1.index = this.chain.length;
        Block1.prevhash = this.getLastBlock().thishash;
        console.log(Block1)
        Block1.thishash = crypto.SHA256(JSON.stringify(Block1)).toString()
        console.log(Block1.thishash)
        // console.log(this.getLastBlock())
        // console.log(this.chain);
        
        this.chain.push(Block1);
    }
    getLastBlock(){ return this.chain[this.chain.length - 1]}
}
let whatsup = new blockchain();
whatsup.addNewBlock(new Block(0,0,4,0,new Content("hi","","","","")))
whatsup.addNewBlock(new Block(0,0,4,0,new Content("hi","","","","")))
whatsup.addNewBlock(new Block(0,0,4,0,new Content("hi","","","","")))

// console.log(whatsup);

// if(fs.wri)
// module.exports = {Block};

// {
//     timestamp: 1665500874155,        
//     posttitle: 'post1',
//     postid: 7,
//     prevhash: 'sjdksadjkasjld'       
//   }