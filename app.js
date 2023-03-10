var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var pacientRouter = require('./routes/pacientRoutes');
var specialistRouter = require('./routes/specialistRoutes');
var terminRouter = require('./routes/terminRoutes');
var zzRouter = require('./routes/zdravstveniZavodRoutes');

var app = express();

var mongoDB = ('mongodb+srv://st_mojtermin:123@cluster0.c4p4p6w.mongodb.net/?retryWrites=true&w=majority');

mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function() {
  console.log("Connected successfully");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pacient', pacientRouter);
app.use('/specialist', specialistRouter);
app.use('/termin', terminRouter);
app.use('/zdravstvenZavod', zzRouter);

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
