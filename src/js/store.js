const { compose, createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk');
const reducers = require('./reducers');

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

module.exports = createStoreWithMiddleware(reducers);
