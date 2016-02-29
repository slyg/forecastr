const {
  USER_QUERY
, FORECAST_UPDATE
, SERVER_ERROR
} = require('../constants');
const { getForecast }  = require('../webApi');

module.exports = function userQuery(query) {

  return async function (dispatch, getState) {

    dispatch({
      type: USER_QUERY,
      query
    });

    try {
      const data = await getForecast(query);
      dispatch({ type: FORECAST_UPDATE, data });
    } catch (error) {
      dispatch({ type: SERVER_ERROR, error });
    }

  }

}
