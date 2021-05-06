var express = require("express");
var app = express();
var mysql = require("mysql");
var cors = require("cors");
var path = require('path');
app.set('views', path.join(__dirname,'src'))
   .use(express.static(path.join(__dirname, 'public')))
   .use(cors());

var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'sierramadra123',
  port:3306,
  database:'databaza'

});
connection.connect(function(err){
  if (err) throw err
  console.log('You are now connected...');
})
app.get("/home", function(req,res){
  let mysql = "select `Anchor Text` from csv_table";
  console.log(mysql);
  var content = connection.query(mysql,function(err,rows,fields){
    if (err) throw err
    res.json(rows);
  });


})
var server = app.listen(3000,"127.0.0.1", function(){
  var host = server.address().address;
  var port = server.address().port;
  console.log("site listens on %s:%d", host,port);

})
