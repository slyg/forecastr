const React = require('react');
const { connect } = require('react-redux');
const { userQuery } = require('../actionCreators');
const { bindActionCreators } = require('redux');
const Search = require('../components/Search.jsx');

const mapStateToProps = ({apiStatus}) => ({...apiStatus});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userQuery
}, dispatch);

module.exports = connect(mapStateToProps, mapDispatchToProps)(Search);
