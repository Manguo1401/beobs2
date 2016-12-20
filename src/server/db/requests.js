module.exports = function(app) {
	require('./requests/attrs_data/attrs_data.dao')(app);
  require('./requests/organism/org.dao')(app);
};
