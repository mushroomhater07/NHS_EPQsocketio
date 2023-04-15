class Block {
  constructor(index){
  this.index = index
}
}
const crypto = require('crypto')
for (let index = 0; index < 10; index++) {
  Block.index = index
  console.log(Block.index)
  console.log(crypto.createHash('sha256').update(Block.toString()).digest('hex'))  
}


