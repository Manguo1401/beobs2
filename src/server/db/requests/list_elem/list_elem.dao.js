//attrs_data_service
var ListElem = require('../../modelslist_elem_model');
var mongoose = require('mongoose');

module.exports = function(app){

/*  app.get('/home/get_categories', function(req, res){
      Category.find({}, function(err, json) {
          if(err) return console.error(err);
          res.send(json);
      });
  });*/

  app.get('/admin/api/getListsElem', function(req, res){
      ListElem.find({}, function(err, json) {
          if(err) return console.error(err);
          res.send(json);
      });
  });

  app.post('/admin/api/addListsElem', function(req, res) {
    console.log("admin.dao addListsElem");
    var obj = new ListElem(req.body);
    obj._id = mongoose.Types.ObjectId();
    obj.save(function(err, obj) {
      if(err) return console.error(err);
      res.status(200).json(obj);
    });
  });


/*
  app.put('/admin/api/editListsElem/:id', function(req,res) {
    ListsElem.findOneAndUpdate({_id: req.params.id}, req.body, function(err) {
          if(err) return console.error(err);
          res.sendStatus(200);
        });
  });

  app.delete('/admin/api/deleteListsElem/:id', function(req, res) {
    ListsElem.findByIdAndRemove({_id: req.params.id}, function(err) {
      if(err) return console.error(err);
      res.sendStatus(200);
    });
  });*/
};
