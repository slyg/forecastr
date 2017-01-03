require('rxjs');

const { combineEpics } = require('redux-observable');
const fetchForecast = require('./fetchForecast')

module.exports = combineEpics(
  fetchForecast
);
