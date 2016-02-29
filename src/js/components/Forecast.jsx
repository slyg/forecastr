const React = require('react');

const Location = require('./Location.jsx');
const WeatherIcon = require('./WeatherIcon.jsx');
const Temperature = require('./Temperature.jsx');

module.exports = ({forecast, isLoading, location}) => {

  if (forecast.length === 0) {
    return <div></div>;
  };

  return (
    <div className={`forecast ${isLoading === true ? '' : 'display'}`}>
      <Location {...location} />
      <div className='forecast-wrapper'>
        <table>
          <colgroup>
            {forecast.map( ({ forecastPerDay }, index) =>
              <col
                key={index}
                span={forecastPerDay.length}
                className={
                  `${index % 2 === 0 ? 'even-col' : 'odd-col'}`
                } />
            )}
          </colgroup>
          <thead>
            <tr>
            {forecast.map(({ day, forecastPerDay }, index) =>
              <td
                key={index}
                colSpan={forecastPerDay.length}>
                {day}
              </td>
            )}
            </tr>
          </thead>
          <tbody>
            <tr>
              {forecast.map(({ forecastPerDay }, index) => forecastPerDay.map(({ time, weatherCode, avgTemp }, index) =>
                <td key={index}>
                  <div className={
                      `
                      forecast-info
                      ${time === '15:00' ? 'visible-lg-block' : ''}
                      ${time === '12:00' ? 'visible-lg-block visible-md-block' : ''}
                      `
                  }>
                    <div className='forecast-hour'>{time}</div>
                    <div className='forecast-sky-icon'>
                      <WeatherIcon weatherCode={weatherCode} />
                    </div>
                    <div className='forecast-temperature'>
                      <Temperature temperature={avgTemp} />
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
