var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var cons = require('consolidate');
var mysql =  require('mysql');

app.use(function(req, res, next) { 
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
      console.log("headers gezet");
  next();
});

//mysql connection string
var connection = mysql.createConnection({
        host     : 'localhost', 
        user     : 'root',
        password : '',
        database : 'testtest'
    });

//test connection
connection.connect(function(err){
  if(err){
    console.log('Error connecting to Mysql.. is it running? '+ err);
    return;
  }
  console.log('Myqsql connection established');
});


// view engine setup
app.engine("html",cons.swig);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json({limit:'50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));//standaard is false.. waarom dit is geen idee TODO
app.use(cookieParser());

app.use('/views', express.static(__dirname + '/views'));
app.use('/node', express.static(__dirname + '/node_modules'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

//capture database post run qeury and return data
app.post('/database', function(req, res) {
  connection.query(req.body.query, function(err, rows, fields) {
    if (err) {
      console.log("query failed exception "+err);
      return "query failed exception " + err;
    }
    res.send(rows);
  });
});

app.post('/mail',function(res){
  http.get('http://pronto.dreamincode.nl/skuuwl/mailer.php?mail="mail"', (res) => {
    console.log(`Got response: ${res.statusCode}`);
    // consume response body
    res.resume();
  }).on('error', (e) => {
    console.log(`Got error: ${e.message}`);
  });
  console.log("mail");
  return "mail verzonden";
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


app.listen(3000, function () {
  console.log('Cowshop app listening on port 3000!');
});

module.exports = app;
