
var express = require('express');
var router = express.Router();
var mysql = require("mysql")
var url = require("url")
var connection = mysql.createConnection({
  host:'',
  user:'',
  password:'',
  port:,
  database:''

});
connection.connect(function(err){
  if (err) throw err
  console.log('You are now connected...');
})

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data = []
  var promise = new Promise(function(success, fail){
    connection.query("select count(`Anchor Text`) as count,`Anchor Text` as text from csv_table group by `Anchor Text`", function(err,rows,fields){
      if (err) throw fail(err);
      data.push(rows)
      success(data)
      console.log(1)
    });


  })
  var promise1 = new Promise(function(success, fail){
    connection.query("select count(`Link Status`) as count,`Link Status` as text1 from csv_table group by `Link Status`", function(err,rows,fields){
      if (err) throw fail(err);
      data.push(rows)
      success(data)
      console.log(2)
    });
  })
  var promise2 = new Promise(function(success, fail){
    connection.query("select substring_index(substring_index(substring_index(`From URL`,'://',-1),'/', 1),'?', 1) as text, count(*) as count1 from csv_table group by text", function(err,rows,fields){
        if (err) throw fail(err);
        data.push(rows)

        success("OK")
      })
    })
  var promise3 = new Promise(function(success, fail){
    connection.query("select count(*) as count, case when BLdom = 0 then '1' when BLdom between 1 and 10 then '1-10' when BLdom between 11 and 100 then '11-100'  when BLdom between 101 and 1000 then '101-1000'  when BLdom between 1001 and 10000 then '1001-10000'  else '10000-10000000000' end as `range` from csv_table group by `range`", function(err,rows,fields){
      if (err) throw fail(err);
      data.push(rows)
      success("OK")

    });
  })

  Promise.all([promise,promise1,promise2,promise3]).then((data1)=>{console.log(1);res.send(data)})



});

module.exports = router;
