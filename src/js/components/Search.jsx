const React = require('react');
const ReactDOM = require('react-dom');
const { debounce } = require('lodash');

const FormControl = require('react-bootstrap/lib/FormControl');

module.exports = React.createClass({

  componentWillMount: function() {
    this.onChange = debounce(this.onChange, 500);
  },

  getInitialState() {
    return { hasBeenUsed: false };
  },

  onChange: function(event){
    const { userQuery } = this.props;
    userQuery(ReactDOM.findDOMNode(this._input).value);
    this.setState({ hasBeenUsed: true });
  },

  render: function(){
    return (
      <div className={`search-box ${this.state.hasBeenUsed ? 'on-top' : ''}`}>
        <i className='wi wi-day-cloudy'></i>
        <FormControl
          ref={(c) => {this._input = c}}
          onChange={this.onChange}
          type="text"
          placeholder="Enter city name, e.g. Paris, tx"
          autoFocus={true} />
      </div>
    );
  }

});
