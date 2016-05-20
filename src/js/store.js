const { compose, createStore, applyMiddleware } = require('redux');
const fetchForecast = require('./middleware/fetchForecast')
const reducers = require('./reducers');

const createStoreWithMiddleware = compose(
  applyMiddleware(fetchForecast)
)(createStore);

module.exports = createStoreWithMiddleware(reducers);
