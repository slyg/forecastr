const {
  USER_QUERY
, FORECAST_UPDATE
, SERVER_ERROR
} = require('../constants');
const { getForecast }  = require('../webApi');

module.exports = store => next => action => {

  const { type, query } = action;

  if (type === USER_QUERY) {

    getForecast(query)
      .then(data => {
        store.dispatch({ type: FORECAST_UPDATE, data });
      }).catch(error => {
        store.dispatch({ type: SERVER_ERROR, error });
      })
    ;

  }

  next(action);

}
