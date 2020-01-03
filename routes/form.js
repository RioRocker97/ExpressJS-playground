var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
    res.render('form1');
});
router.post('/form_submit',function(req,res,next){
    console.log(req.body);
    res.render('form-sub',{a: req.body.body1,b: req.body.body2,c:req.body.body3});
});

module.exports = router;