var cloudant = require('cloudant');
var cloudantConnection = cloudant('https://jccastrejon.cloudant.com');
var db = cloudantConnection.db.use('policy');

//---------------------------------------------------------------
cloudantConnection.insert = function(object, documentName){
 
    if(object == null || object == undefined){
    	return throw new Error('object is null or undefined');
    }

    if(documentName == null || documentName == undefined){
    	return throw new Error('documentName is null or undefined');
    }

    try {
        
        db.insert(object, documentName, function(err, body, header) {

            if (err) {
        	    return throw err;
            }

            return body;
      
        });

    } catch(e) {
    	return throw e;
    }

}


module.exports = cloudantConnection;