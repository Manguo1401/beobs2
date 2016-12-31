//attrs_data_service

var Category = require('../../models/category_model');
var AttrData = require('../../models/attr_data_model');
var mongoose = require('mongoose');

module.exports = function(app){

  //////////////
  //Categories//
  //////////////

  app.get('/home/dao/get_categories', function(req, res){
      Category.find({}, function(err, json) {
          if(err) return console.error(err);
          res.send(json);
      });
  });

  app.post('/admin/dao/addCategory', function(req, res) {
    var obj = new Category(req.body);
    obj._id = mongoose.Types.ObjectId();
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });

  app.put('/admin/dao/editCategory/:id', function(req,res) {
    Category.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        });
  });

  app.delete('/admin/dao/deleteCategory/:id', function(req, res) {
    Category.findByIdAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });

  /////////////
  //Attr data//
  /////////////

  app.get('/home/dao/get_attrs_data', function(req, res){
      AttrData.find({}, function(err, json) {
          if(err) return console.error(err);
          res.send(json);
      });
  });

  app.post('/admin/dao/addAttrData', function(req, res) {
    var obj = new AttrData(req.body);
    obj._id = mongoose.Types.ObjectId();
    obj.save(function(err, obj) {
      if(err) return console.log(err);
      res.status(200).json(obj);
    })
  });

  app.put('/admin/dao/editAttrData/:id', function(req,res) {
    AttrData.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        });
  });

  app.delete('/admin/dao/deleteAttrData/:id', function(req, res) {
    AttrData.findByIdAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });

  app.post('/admin/dao/checkCategories', function(req, res) {
    var categories_ids = [];
    var data = req.body;
    for( var cat in data ) {
      categories_ids.push(data[cat]._id);
    }
    AttrData.update({ category_id: {$nin: categories_ids }}, {$unset: {category_id: ""}}, {multi: true}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    })
  });

  app.put('/admin/dao/addToCategory', function(req, res) {
    var data = req.body;
    AttrData.findOneAndUpdate({_id: data._id}, {$set: {category_id: data.category}}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  })

};
