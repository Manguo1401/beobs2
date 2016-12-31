//attrs_data_service
var User = require('../../models/user_model');
var Organism = require('../../models/organism_model');
var mongoose = require('mongoose');

module.exports = function(app){

/*  app.get('/home/get_categories', function(req, res){
      Category.find({}, function(err, json) {
          if(err) return console.error(err);
          res.send(json);
      });
  });*/

  app.post('/org/api/createOrganism2', function(req, res) {
    console.log("org.dao createOrganismzzzzzzz");
    var obj = new Organism(req.body);
    obj._id = mongoose.Types.ObjectId();
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  app.post('/org/api/createOrganism', function(req, res) {
    console.log("user.dao createuseraaaaaaaaa");
    var obj = new User(req.body);
    obj._id = mongoose.Types.ObjectId();
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });
/*
  app.put('/admin/api/editCategory/:id', function(req,res) {
    Category.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        });
  });

  app.delete('/admin/api/deleteCategory/:id', function(req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });*/
};
