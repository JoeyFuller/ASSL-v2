/*
* More details here http://mongoosejs.com/docs/index.html
*/

//require mongoose node module
var path = require('path');
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var mongoose = require('mongoose');
var app = express();
app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });
//app.use(express.logger());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.configure('development', function(){
    app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
    app.use(express.errorHandler());
});

var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

var Account = require('./models/account');
//passport.use(Account.createStrategy());
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());

//attach lister to connected event
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});

// routes
require('./routes')(app);

//connect to local mongodb database

app.listen(80, function(){
  console.log(("Express server listening on port " + app.get('port')))
});