const { USER_QUERY, FORECAST_UPDATE, SERVER_ERROR } = require('./constants');

exports.userQuery = query => ({
  type: USER_QUERY,
  query
});

exports.forecastUpdate = data => ({
  type: FORECAST_UPDATE,
  data
});

exports.serverError = error => ({
  type: SERVER_ERROR,
  error
})
