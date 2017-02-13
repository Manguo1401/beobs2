//npm install --save jsonwebtoken

//attrs_data_service

var User = require('../../models/user_model');
var mongoose = require('mongoose');

//var constants = require('../config/constants');
//var utils = require('../config/utils');
// module authentification
//var jwt = require('jsonwebtoken');
//var jwtMid = require('express-jwt');
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10); // salage

module.exports = function(app){


  app.post('/user/create', function(req, res) {

    //Check if user exists
    User.findOne({ username: req.body.username }, function(err, user) {
      if (user) {
        return res.status(400).json([{
          status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Probleme creation user',
          message: 'utilisateur déjà existant',
          data: "no",
          token: null
        }]);
      }
    });

    var user = new User(req.body);
    user.name = req.body.username;
    user.email = req.body.email;
    user.setPassword(req.body.password);

    user._id = mongoose.Types.ObjectId();
    user.save(function(err, obj) {
      if (!err) {
        res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Compte créé',
          message: 'Please confirm your email id by clicking on link in email',
          data: obj.username,
          token: user.generateJwt()
        });
      } else
      {
        console.log("create fail: user already exists?"); //FONCTIONNE
        res.status(204).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Probleme creation user',
          message: 'erreur creation user',
          data: "no",
          token: null
        });
        /*if (11000 === err.code || 11001 === err.code) {
          return res.send(Boom.forbidden("please provide another user email"));
        } else{
          return res.send(Boom.forbidden(err));
          // HTTP 403
        }*/
      }
    });
  });

  app.post('/user/login', function(req, res) {
    console.log("user login req " + req);
    console.log("user login " + req.body.username);
    User.findOne({ username : req.body.username }, function(err, user) {
      if (err){
        console.log("error: user not find" + err);
        res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Probleme Connexion',
          message: 'FindOne user fail',
          data: "not found",
          token: null
        });
      }else{
        if(user){
          console.log("user find:"+ user.username + " "+ user.email);
          var token;
          token = user.generateJwt();
          res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
            title: 'Connexion',
            message: 'You are connected !',
            data: req.body.username,
            token: token
          });
        }else{
          console.log("no res: user not found");
          res.status(204).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
            title: 'Probleme Connexion',
            message: 'Utilisateur ou mot de passe invalide',
            data: "not found",
            token: null
          });
        }
      }
    });
  });


};
