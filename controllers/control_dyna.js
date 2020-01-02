var express = require('express');
var app = express();

app.use(express.urlencoded({ extended: false }));

app.post('/submit',function(req,res,next){
    console.log(req.body.body1);
    console.log(req.body.body2);
    console.log(req.body.body3);
    res.render('dynamicPost',{carname: req.body.body1,carbrand: req.body.body2,caryear: req.body.body3})
});

module.exports = app;