const React = require('react');
const { connect } = require('react-redux');
const Forecast = require('../components/Forecast.jsx');
const forecastSelector = require('../selectors/forecastSelector.js');

const ForecastContainer = (props) => <Forecast {...props} />

module.exports = connect(forecastSelector)(ForecastContainer);
