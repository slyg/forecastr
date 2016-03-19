const { compose, createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const reducers = require('./reducers');

const createStoreWithMiddleware = compose(
  applyMiddleware(thunk)
)(createStore);

module.exports = createStoreWithMiddleware(reducers);
