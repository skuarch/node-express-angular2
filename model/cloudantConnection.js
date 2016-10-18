var cloudant = require('cloudant');
var cloudantConnection = cloudant('https://jccastrejon.cloudant.com');

//---------------------------------------------------------------
cloudantConnection.insert = function(){

}


module.exports = cloudantConnection;