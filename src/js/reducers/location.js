const { FORECAST_UPDATE } = require('../constants');

const initialState = {};

module.exports = function location(state = initialState, action){

  switch (action.type) {
    case FORECAST_UPDATE: {
      const { data } = action;
      return {
        ...data.city,
        city: data.city.name
      };
    }
  }

  return state;
}
