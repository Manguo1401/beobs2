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

  app.post('/user/login', function(req, res) {
    console.log("user login req " + req);
    console.log("user login " + req.body.username);
    User.findOne({ username : req.body.username }, function(err, user) {
        if (err){
          console.log("user not find");
          return console.error(err);
        }

        console.log("user find:"+ user.username + " "+ user.email);
        var token;
        token = user.generateJwt();
        res.status(200).json({ status: 1,//constants.JSON_STATUS_SUCCESS,
          title: 'Connexion',
          message: 'You are connected !',
          data: req.body.username,
          token: token
        });
    });
  });


};
