var express = require('express');
var router = express.Router();
var cloudantConnection = require('../model/net/cloudantConnection');
var policyMapper = require('../model/logic/policyMapper');


//-----------------------------------------------------------------------
router.post('/', function(req, res, next) {
  
    try {

    	policy = policyMapper.mapPolicy(req);
    	//cloudantConnection.savePolicy(policy);

    } catch(e) {
        res.statusCode = 400;
        res.send(e);	
        console.log(e);
        return;
    }

    res.send(policy);

});

module.exports = router;
 
