var Operario = require('../controllers/operario.server.controllers.js');

module.exports = function(app){

  app.route('/operario')
    .get(Operario.pagInicial)
    .post(Operario.verificarLogin);
}
