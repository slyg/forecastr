const { FORECAST_UPDATE } = require('../constants');

const initialState = [];

module.exports = function forecast(state = initialState, action){

  switch (action.type) {
    case FORECAST_UPDATE: {
      const { data } = action;
      return data.list;
    }
  }

  return state;
}
