var express = require('express');
var router = express.Router();
var car = require('../model/car');
var myDB = car.myDB;

router.get('/',function(req,res,next){
    res.render('form1');
});
router.post('/form_submit',function(req,res,next){
    console.log(req.body);
    res.render('form-sub',{a: req.body.body1,b: req.body.body2,c:req.body.body3});
});
router.get('/f2',function(req,res,next){
    res.render('form2');
});
router.post('/f2/form_insert',function(req,res,next){
    console.log('Get some info from Form 2');
    //console.log(req.body);
    var values = [req.body.name,req.body.brand,Number(req.body.year)];
    console.log(values);
    myDB.query('INSERT INTO car(name,brand,year) VALUES (?)',[values],function(err,result){
        if(err){
            res.redirect('/');
            throw err
        }
        console.log('Form INSERT INTO success!');
        res.redirect('/dynamic');
    })
})
module.exports = router;