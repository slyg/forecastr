const { combineReducers } = require('redux');

const apiStatus = require('./apiStatus');
const forecast = require('./forecast');
const location = require('./location');

module.exports = combineReducers({
  apiStatus,
  forecast,
  location
});
