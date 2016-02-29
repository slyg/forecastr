const { API_TOKEN } = require('./constants');

exports.getForecast = (query) => {

  return fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${API_TOKEN}`)
    .then(r => {
      if (!r.ok) { throw r; }
      return r.json();
    })
  ;

};
