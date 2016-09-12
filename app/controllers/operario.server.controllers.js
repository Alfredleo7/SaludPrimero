var Operario = require('mongoose').model('Operario');

exports.pagInicial = function(req, res){
  res.render('operario');
}


exports.verificarLogin = function(req, res, next){

  var user =  req.body.user;
  var password = req.body.password;

  Operario.findOne({ $and : [ { user : user }, { password : password } ] }, { _id : 1 }, function(err, operario){
    if(err){
      res.send({ mensaje : err });
    } else {
      if(!operario){
        res.send({ mensaje : 'Usuario o contraseña incorrecta' });
      } else {
        /*req.session.idUser = operario._id;
        req.session.rol = 'Operario';*/
        res.send({ url : 'operario' });
      }
    }
  });
}
