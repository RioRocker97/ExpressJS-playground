//initalize app with lots of thing i do not know
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//declare router 
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dynamicRouter = require('./routes/dyna');

//declare Controller
var dynamicController = require('./controllers/control_dyna');


//delcare Database
//var myDatabase = require('./database')
//initialize web app with Express.js
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// something about using other feature in express.js
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/dynamic',dynamicRouter);

app.use(dynamicController);
//////////////////////////////////////
/*var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'chang1997',
  database: 'carlist'
})
connection.connect();
*/
//app.use(myDatabase);
//////////////////////////////////////
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
