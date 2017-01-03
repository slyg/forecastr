const { USER_QUERY, FORECAST_UPDATE, SERVER_ERROR } = require('../constants');

const initialState = {
  hasFailed: false,
  isLoading: true,
  query: ''
};

module.exports = function apiStatus(state = initialState, action){

  switch (action.type) {

    case USER_QUERY: {
      const { query } = action;
      return { ...state, query, isLoading: true, hasFailed: false };
    }

    case FORECAST_UPDATE:
      return { ...state, isLoading: false, hasFailed: false };

    case SERVER_ERROR:
      return {...state, isLoading: false, hasFailed: true}

  }

  return state;
}
