var main = document.getElementById('main');
var mysql = require('mysql');
var connectDB = mysql.createConnection({
    host: 'localhost',
    user: 'changnoi',
    password: 'chang1997',
    database: 'carlist'
})

connectDB.connect();

connectDB.query('SELECT 1',function(err,rows,fields){
    if(err) throw err
    console.log(connectDB.connect());
})

connectDB.end();