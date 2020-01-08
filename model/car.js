var express = require('express');
var myData = {d1: 'Mustang GT-40',d2: 'Ford',d3: '1965'};
var mysql = require('mysql');
var myDB = mysql.createConnection({
    host: 'localhost',
    user: 'chang97', 
    password: 'chang1997',
    database: 'carlist',
})
//use new USER naem chang97 for accessing car database
//NOTE YOURSELF . Need to find how to hide password
module.exports ={
    myData: myData,
    myDB: myDB
}
