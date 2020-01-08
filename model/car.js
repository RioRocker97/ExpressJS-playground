var express = require('express');
var myData = {d1: 'Mustang GT-40',d2: 'Ford',d3: '1965'};
var mysql = require('mysql');
var myDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chang1997',
    database: 'carlist'
})

module.exports ={
    myData: myData,
    myDB: myDB
}
