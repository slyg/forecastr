const React = require('react');

const Grid = require('react-bootstrap/lib/Grid');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const SearchBox = require('./SearchBox.jsx');
const Forecast = require('./Forecast.jsx');

module.exports = () =>
  <Grid>
    <Row className='user-input'>
      <Col
        xs={6} xsOffset={3}
        sm={4} smOffset={4}>
        <SearchBox />
      </Col>
    </Row>
    <Row>
      <Col
        xs={12} xsOffset={0}>
        <Forecast />
      </Col>
    </Row>
  </Grid>
