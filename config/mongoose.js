var config = require('./config');
var mongoose = require('mongoose');

module.exports = function(){
  var db = mongoose.connect(config.db, function(err){
    if(err){
      console.log("Error de conexión");
    } else {
      console.log('Conexión establecida');
    }
  });


  require('../app/models/operario.server.models.js');
  return db;
}
