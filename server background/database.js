function connect( sql) {
  var mysql = require('mysql');
  var con = mysql.createConnection({
    host: "heyhome.i234.me",
    port: 6969,
    user: "hey",
    password: "Ss12345678*",
    database: 'blockchain',
      options: {           
          encrypt: false
      }
  });

  //sql = "SELECT * FROM post";
  con.connect(function(err) {
      if (err) throw err;
      console.log("Connected to database");
      con.query(sql, function (err, result, fields) {
        if (err) {console.log(err);return String("false");}//throw err;
        console.log("Query succeeded");
        //console.log("Result: " + result);
        console.log(JSON.stringify(result)[0]);
        //console.log(fields);
        return true;
      });
    });
    
};
module.exports = {connect};