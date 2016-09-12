var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var operarioSchema = new Schema({
  nombre1 : String,
  nombre2 : String,
  apellido1 : String,
  apellido2 : String,
  user : String,
  password : String
});

mongoose.model('Operario', operarioSchema);
