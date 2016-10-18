var express = require('express');
var router = express.Router();
var cloudantConnection = require('../model/cloudantConnection');


//-----------------------------------------------------------------------
router.post('/', function(req, res, next) {
  
    //res.render('dashboard.html', { title: 'skuarch' });
    //res.send('mocos');

    var db = cloudantConnection.db.use('policy');
    res.send(db);

});

module.exports = router;
 
