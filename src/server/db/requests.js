module.exports = function(app) {
	require('./requests/attrs_data/attrs_data.service')(app);
  require('./requests/organism/org.dao')(app);
};
