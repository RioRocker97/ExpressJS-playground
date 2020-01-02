var app = require('express');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chang1997',
    database: 'carlist'
  })
  connection.connect();
  
module.exports = app;