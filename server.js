
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var session = require('express-session');
const mongoose = require('mongoose');
require('./models/Users');

var cookieParser = require('cookie-parser');

app.use(require('express-status-monitor')({ path: '' }));

const {mongoUrl} =  require('./dbConnection/keys');



// ejs for header footer include

var ejs = require('ejs'); 
ejs.open = '{{'; 
ejs.close = '}}';
app.engine('html', require('ejs').renderFile); 

// using cookie and session

app.use(cookieParser());
app.use(session({secret : "This is top secret session key", saveUninitialized : false, resave: false}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname + '/html'));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/html'));

app.use('/', require("./controller/restapi/router"));

mongoose.connect(mongoUrl,{
      useNewUrlParser: true,
      useUnifiedTopology: true
  });
  
  mongoose.connection.on('connected',()=>{
      console.log("mongo connected");    
  });
  
  mongoose.connection.on('error',(err)=>{
      console.log("this is error",err);    
  });

  var server = app.listen(process.env.PORT || 8000, function() { 

      console.log('Listening locally on port %d', server.address().port);

      var adr = 'http://localhost:'+server.address().port;
      console.log('Browser Addr', adr);
}); 


