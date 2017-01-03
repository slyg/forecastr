const { compose, createStore, applyMiddleware } = require('redux');
const { createEpicMiddleware } = require('redux-observable');
const epics = require('./epics');
const reducers = require('./reducers');

const epicsMiddleware = createEpicMiddleware(epics);

module.exports = createStore(
  reducers,
  applyMiddleware(epicsMiddleware)
);
