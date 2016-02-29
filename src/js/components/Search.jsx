const React = require('react');
const { debounce } = require('lodash');

const Input = require('react-bootstrap/lib/Input');

module.exports = React.createClass({

  componentWillMount: function() {
    this.onChange = debounce(this.onChange, 500);
  },

  getInitialState() {
    return { hasBeenUsed: false };
  },

  onChange: function(event){
    const { userQuery } = this.props;
    userQuery(this.refs['city-name-input'].getValue());
    this.setState({ hasBeenUsed: true })
  },

  render: function(){
    return (
      <div className={`search-box ${this.state.hasBeenUsed ? 'on-top' : ''}`}>
        <i className='wi wi-day-cloudy'></i>
        <Input
          ref="city-name-input"
          onChange={this.onChange}
          type="text"
          placeholder="Enter city name, e.g. Paris, tx"
          autoFocus={true}
          groupClassName='city-name-input' />
      </div>
    );
  }

});
