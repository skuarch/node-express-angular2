var policyMapper = {};
var policy = require('../object/policyObject');

//---------------------------------------------------------------
policyMapper.mapPolicy = function (request){    
    
   	if(request == null || request == undefined || request == ''){
        throw new Error('request is null or empty');
    }
    
    if(request.body.title == null || request.body.title == undefined || request.body.title.length < 0){
    	throw new Error('title of policy is null or empty');
    }

    policy.title = request.body.title;
    policy.content = request.body.content;
    return policy;

}

module.exports = policyMapper;