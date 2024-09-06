var http = require('https');
var url = require('url');
var fs = require('fs');
var mysql = require('mysql2');

http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/insert') {
    con.connect(function(err) {
        if (err) throw err;
        res.write("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          res.end("1 record inserted");
        });
      })
    }
    else if(req.method === 'GET' && req.url === '/show'){
        res.writeHead(200,{"Content-Type" : "application/json"})
        con.connect(function(err) {
            if (err) throw err;
            res.write("Connected!");
            var sql = "SELECT * FROM customers";
            con.query(sql, function (err, result,fields) {
              if (err) throw err;
              res.write(JSON.stringify(result));
              res.end();
            });
          })
    }
    else{
        res.end("Invalid API");
    }
}).listen(8080);  


var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kulanshu",
  database: "SEP1"
});
