var index = require('../controllers/index.server.controllers.js');

module.exports = function(app){
  app.route('/')
    .get(index.pagInicial);
}
