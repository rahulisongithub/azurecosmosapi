var express = require('express');
var path = require('path');
var colors= require('colors');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var productService = require('./public/scripts/webapi/productService');

mongoose.Promise = global.Promise;

//mongoose.connect("mongodb://localhost:27017/eCommerce", { useNewUrlParser: true });


   mongoose.connect('mongodb://rsacosmosdb:XqutCmqmMY79HYQp7pomaZPb2H6ERw5IfvAq7SC98eGSKiJs8eNfUp4fuUnfSYSp3eT5DkNGLkgFY1guGJQezg==@rsacosmosdb.documents.azure.com:10255/eCommerce?ssl=true',{ useNewUrlParser: true })
   .then(() => console.log('connection successful'))
   .catch((err) => console.error(err));
  
var app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/products',productService);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
module.exports = app;