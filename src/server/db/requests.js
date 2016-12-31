module.exports = function(app) {
	require('./requests/attrs_data/attrs_data.service')(app);
  require('./requests/organism/org.dao')(app);
  require('./requests/connect/createuser')(app);
    // User Management

  require('./requests/connect/auth_user')(app);
};
