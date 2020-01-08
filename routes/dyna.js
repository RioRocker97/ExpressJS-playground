var express = require('express');
var router = express.Router();

//include my First Model
var car = require('../model/car')
var myCar = car.myData;
var myDB = car.myDB;
router.get('/',function(req,res,next){
    myDB.query('SELECT * FROM car ',function(err,rows,fields){
        if(err) throw err
        var Cbrand= [];
        var Cname = [];
        var Cyear = [];
        console.log(rows[5])
        for(var i=0;i<rows.length;i++){
            Cbrand[i]=rows[i].brand;
            Cname[i]=rows[i].name;
            Cyear[i]=rows[i].year;
        }
        res.render('dynamic1',{
            Carbrand: Cbrand,
            Carname: Cname,
            Caryear: Cyear
        });
    });
});
module.exports = router;
