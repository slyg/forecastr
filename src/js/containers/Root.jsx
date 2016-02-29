const React = require('react');
const ReactDOM = require('react-dom');
const { Provider } = require('react-redux');
const Layout = require('./Layout.jsx');

module.exports = (elementId, store) =>
  ReactDOM.render(
    <Provider store={store}>
      <Layout />
    </Provider>,
    document.getElementById(elementId)
  )
;
