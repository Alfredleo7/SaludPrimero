var config = require('./config');
var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var path = require('path');
//var favicon = require('serve-favicon');

module.exports = function(){
  var app = express();

  if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  } else if(process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended : true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());
  app.use(session({
    secret : config.sessionSecret,
    resave : true,
    saveUninitialized : false
  }));
  app.set('views', './app/views');
  app.set('view engine', 'ejs');


  //app.use(favicon(__dirname + '/public/favicon.ico'));

  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/operario.server.routes.js')(app);

  app.use(express.static('./public'));

  return app;
};
