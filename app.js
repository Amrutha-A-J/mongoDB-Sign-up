var express = require('express');
var app =express();
var root = require('./routes/root');
var signup = require('./routes/signup');
var login = require("./routes/login");
var viewdata = require('./routes/viewdata');
// view engine setup
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', root);
app.use('/signup', signup);
app.use("/login", login);
app.use("/view", viewdata);

app.listen(3000);