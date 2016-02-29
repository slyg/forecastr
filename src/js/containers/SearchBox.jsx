const React = require('react');
const { connect } = require('react-redux');
const { userQuery } = require('../actionCreators');
const { bindActionCreators } = require('redux');
const SearchBox = require('../components/SearchBox.jsx');

const SearchBoxContainer = (props) => <SearchBox {...props} />

const mapStateToProps = ({apiStatus}) => ({...apiStatus});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  userQuery
}, dispatch);

module.exports = connect(mapStateToProps, mapDispatchToProps)(SearchBoxContainer);
