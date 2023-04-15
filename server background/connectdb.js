const db = require('./database')
let tag = db.connect("SELECT title FROM tag ");

console.log(tag);