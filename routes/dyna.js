var express = require('express');
var router = express.Router();

//include my First Model
var car = require('../model/car')

router.get('/',function(req,res,next){
    res.render('dynamic1',{d1:car.d1,d2:car.d2,d3:car.d3});
});
module.exports = router;
