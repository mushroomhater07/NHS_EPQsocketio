function crypto(method, text){
    var crypto = require('crypto');
    const hash1 = crypto.createHash('sha256').update("input").digest('base64');
    const hash2 = crypto.createHash('sha256').update("input").digest('hex');
    console.log(hash1);
    console.log(hash2);

    var crypto1 = require('crypto-js');
    var msh = crypto1.AES.encrypt("hi", "key");
    console.log(msh + " fiunniished");
    return undefined;
}
