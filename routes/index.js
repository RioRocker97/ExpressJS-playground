var express = require('express');
var router = express.Router();

// Routing into specific page . see express.js documentation for more understanding
router.get('/me', function(req, res, next) {
  res.render('my_welcome', { title: 'ChangNoi' });
});
router.get('/',function(req,res,next){
  res.render('static_welcome');
});

module.exports = router;
