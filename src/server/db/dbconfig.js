var mongoose = require('mongoose');

mongoose.connect('mongodb://test:test@ds013456.mlab.com:13456/ng2test');

module.exports = mongoose;