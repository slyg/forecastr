const moment = require('moment');
const flow = require('lodash/fp/flow');
const map = require('lodash/fp/map');
const filter = require('lodash/fp/filter');
const reverse = require('lodash/fp/reverse');
const reduce = require('lodash/fp/reduce');

const selectUsefulData = forecastPer3Hours => {

  const momentDate = moment(forecastPer3Hours.dt_txt);
  const dayCode = momentDate.day(); // day of the week, e.g. 3
  const day = moment.weekdays(dayCode); // day of the week, e.g. 'Wednesday'
  const hour = momentDate.hour(); // absolute hour value
  const time = momentDate.format('HH:mm');
  const avgTemp = Math.floor(parseInt(+forecastPer3Hours.main.temp - 273,15, 10));
  const weatherCode = forecastPer3Hours.weather[0].id;

  return {
    weatherCode,
    avgTemp,
    hour,
    time,
    day
  };

};

const isInDay = forecastPer3Hours =>
  (+forecastPer3Hours.hour > 6 && +forecastPer3Hours.hour < 21)
;

const accumulatePerDay = (memo, forecastPer3Hours) => {

  let [memoHead, ...memoTail] = memo;

  if (memo.length === 0 || memoHead.day !== forecastPer3Hours.day) {
    return [
      {
        day: forecastPer3Hours.day,
        forecastPerDay: [forecastPer3Hours]
      },
      ...memo
    ]
  } else {
    return [
      {
        ...memoHead,
        forecastPerDay: [forecastPer3Hours, ...memoHead.forecastPerDay]
      },
      ...memoTail
    ];
  }

};

const formatforecast = flow(
  map(selectUsefulData),
  filter(isInDay),
  reverse,
  reduce(accumulatePerDay, [])
);

module.exports = ({forecast, apiStatus, location}) => ({

  forecast: formatforecast(forecast),

  location: {
    city: location.city,
    country: location.country
  },

  isLoading: apiStatus.isLoading

});
