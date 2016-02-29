const { USER_QUERY, FORECAST_UPDATE } = require('../constants');

const initialState = {
  isLoading: true,
  query: ''
};

module.exports = function apiStatus(state = initialState, action){

  switch (action.type) {

    case USER_QUERY: {
      const { query } = action;
      return { ...state, query, isLoading: true };
    }

    case FORECAST_UPDATE:
      return { ...state, isLoading: false };

  }

  return state;
}
