const {
  USER_QUERY
, FORECAST_UPDATE
// , SERVER_ERROR
, API_TOKEN
} = require('../constants');

const { ajax } = require('rxjs/observable/dom/ajax');
const { timer } = require('rxjs/observable/timer');

module.exports = action$ =>
  action$
    .ofType(USER_QUERY)
    .debounce(() => timer(1000))
    .mergeMap(({query}) =>
      ajax({
        url: `http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_TOKEN}`,
        responseType: 'json',
        crossDomain: true
      }).map(({response}) => ({ type: FORECAST_UPDATE, data: response }))
    )
