var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('dynamic1');
});
router.get('/d2',function(req,res,next){
    res.render('dynamic2');
})
module.exports = router;
