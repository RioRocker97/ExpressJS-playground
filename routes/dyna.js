var express = require('express');
var router = express.Router();

//include my First Model
var car = require('../model/car')
var myCar = car.myData;
var myDB = car.myDB;
router.get('/',function(req,res,next){
    myDB.query('SELECT * FROM car ',function(err,rows,fields){
        if(err) throw err
        var carDB= [];
        for(var i=0;i<5;i++){
            carDB[i]=rows[i].name;
        }
        console.log(carDB);
        res.render('dynamic1',{
            d1:myCar.d1,
            d2:myCar.d2,
            d3:myCar.d3,
            db1:carDB
        });
    })
});
module.exports = router;
