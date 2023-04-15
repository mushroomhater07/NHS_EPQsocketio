const file = require('fs');
function savedata(filepath){
    file.readFileSync(`./${filepath}.json`, 'utf-8')
    const detail = JSON.parse(data)
    detail.forEach(element => {
        console.log(element.title)
        console.log(element.post)
    });
}
function writedata(data, istag){

}
class CryptoBlockchain{
    constructor(){
        this.blockchain = [this.startGenesisBlock()];     
    }
    startGenesisBlock(){
        return new CryptoBlock(0, "01/01/2020", "Initial Block in the Chain", "0");
    }
    obtainLatestBlock(){
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock){
        newBlock.precedingHash = this.obtainLatestBlock().hash;
        newBlock.hash = newBlock.computeHash();        
        this.blockchain.push(newBlock);
    }
}
// //testing
// let smashingCoin = new CryptoBlockchain();
// smashingCoin.addNewBlock(new CryptoBlock(1, "01/06/2020", {sender: "Iris Ljesnjanin", recipient: "Cosima Mielke", quantity: 50}));
// smashingCoin.addNewBlock(new CryptoBlock(2, "01/07/2020", {sender: "Vitaly Friedman", recipient: "Ricardo Gimenes", quantity: 100}) );
// console.log(JSON.stringify(smashingCoin, null, 4));
// //verify
// function checkChainValidity(){
//     for(let i = 1; i < this.blockchain.length; i++){
//         const currentBlock = this.blockchain[i];
//         const precedingBlock= this.blockchain[i-1];

//       if(currentBlock.hash !== currentBlock.computeHash()){
//           return false;
//       }
//       if(currentBlock.precedingHash !== precedingBlock.hash)
//         return false;
//     }
//     return true;
// }checkChainValidity();
