var express = require('express');
var router = express.Router();
var myDB = require('../database');

router.get('/',function(req,res,next){
    res.render('dynamic1');
});
router.get('/d2',function(req,res,next){
    res.render('dynamic2',{name:['abc','def','hij']});
})
module.exports = router;
