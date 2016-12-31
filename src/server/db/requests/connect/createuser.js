
//var passport = require('passport');
var User = require('../../models/user_model');
var mongoose = require('mongoose');


module.exports = function(app){

  /*app.post('/user/create', function(req, res) {

    var user = new User(req.body);
    user.name = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user._id = mongoose.Types.ObjectId();
    user.save(function(err, obj) {
      if (!err) {
        var token;
        token = user.generateJwt();
        res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Compte créé',
          message: 'Please confirm your email id by clicking on link in email',
          data: req.body.username,
          token: token
        });
      } else
      {
        if (11000 === err.code || 11001 === err.code) {
              return res.send(Boom.forbidden("please provide another user email"));
          } else{
            return res.send(Boom.forbidden(err)); // HTTP 403
          }
      }
      });
  });

  app.post('/user/loginOLD', function(req, res) {
    if(req.body.username != "root" || req.body.password != "root") {
      res.status(401);
      res.json({ status: -1,//constants.JSON_STATUS_ERROR,
        title: 'Erreur connexion',
        message: 'This user don\'t exist !'});
    } else {
      var user = {username: req.body.username};
      var token;
      token = user.generateJwt();
      res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
        title: 'Connexion',
        message: 'You are connected !',
        data: req.body.username,
        token: token
      });
    }
 });*/

//A ajouter dans un fichier config tokenConstant.js
/*function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("JSON_STATUS_SUCCESS", 1);
define("JSON_STATUS_WARNING", -1);
define("JSON_STATUS_NOTICE", 0);
define("JSON_STATUS_ERROR", -2);
*/
}
