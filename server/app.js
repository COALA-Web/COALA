var createError = require('http-errors');
const express = require('express');
var path = require('path');
const history = require('connect-history-api-fallback');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const app = express();
const port = 3000
const bodyParser = require('body-parser')

app.use(bodyParser.json())
//app.use('/api/users', usersRouter);

// database
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'coala.crmeanf0td5o.ap-northeast-2.rds.amazonaws.com',
    port: 3307,
    user: 'coala',
    password: 'coala1234'
});

connection.connect(function (err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
    else {
        console.log('mysql success!');
    }
});

app.post('/api/login', (req, res) => {
    const loginId = req.body.loginId;
    const loginPw = req.body.loginPw;
    console.log(loginId);
    console.log(loginPw);

    connection.query('SELECT id, pwd FROM sys.user WHERE id = "' + loginId + '"', function(err, row) {
        console.log(row[0]);
        console.log(row[0].id);
        console.log(row[0].pwd);
        if(err) {
            res.json({
                success: false,
                message: 'Login Failed!'
            })
        }
        if (row[0].id == loginId && row[0].pwd == loginPw) {
            res.json({
                success: true,
                message: 'Login Successful!'
            })
        }

        else {
            res.json({
                message: 'Failed!'
            })
        }
    })
})

app.post('/api/levelCheck', (req, res) => {
    const greedy = req.body.greedy;
    const dp = req.body.dp;
    const sort = req.body.sort;
    const tree = req.body.tree;
    const graph = req.body.graph;

    var sql = 'UPDATE sys.level SET greedy="?", dp="?", sort="?", tree="?", graph="?" WHERE id=2019000000';
    var params = [greedy, dp, sort, tree, graph];
    connection.query(sql, params, function(err) {
      if (err) throw err;
    });
    
    res.json({
      success: true,
      message: 'levelCheck Success!'
    })
    
})


app.post('/regist', function (req, res) {
    var user = {
        'userid': req.body.userid,
        'name': req.body.name,
        'address': req.body.address
    };
    var query = connection.query('insert into users set ?', user, function (err, result) {
        if (err) {
          console.error(err);
          throw err;
        }
        res.status(200).send('success');
      });
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(history()); // connect-history-api-fallback: 새로고침 404 에러 방지

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});



module.exports = app;
