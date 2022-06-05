var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs')
//var app = express();

// database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'coala.crmeanf0td5o.ap-northeast-2.rds.amazonaws.com',
    port: 3307,
    user: 'coala',
    password: 'coala1234'
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res) {
  const user = {
    'userid': req.body.loginId,
    'password': req.body.loginPw
  };
  connection.query('SELECT id, pwd FROM sys.user WHERE id = "' + user.userid + '"', function(err, row) {
    if(err) {
      res.json({
        success: false,
        message: 'Login Failed!'
      })
    }
    if (row[0] !==undefined && row[0].userid === user.userid) {
      bcrypt.compare(user.password, row[0].password, function(err, res2) {
        if(res2) {
          res.json({
            success: true,
            message: 'Login Successful!'
          })
        }
        else {
          res.json({
            message: 'Login Failed!'
          })
        }
      })
    }
  })
})

router.post('/levelCheck', function (req, res) {
  console.log("level check");
  console.log("level check");
  console.log(req.level.greedy);
  var greedy = req.body.level.greedy;
  var dp = req.body.level.dp;
  var sort = req.body.level.sort;
  var tree = req.body.level.tree;
  var graph = req.body.level.graph;
  console.log("before before query");
  var sql = 'UPDATE sys.level SET greedy="?", dp="?", sort="?", tree="?", graph="?" WHERE id=2019000000';
  var params = [2,1,4,3,2];
  console.log("before query");
  connection.query(sql, params, function(err) {
    console.log("query");
    if (err) throw err;
    console.log(err);
  });
  
  res.json({
    success: true,
    message: 'levelCheck Success!'
  })
  
});

module.exports = router;
