const React = require('react');

const iconClassName = weatherCode => {
  switch (weatherCode) {
    case 200:
    case 201:
    case 202:
    case 210:
    case 211:
    case 212:
    case 221:
    case 230:
    case 231:
    case 223:
      return 'wi-thunderstorm';

    case 300:
    case 301:
    case 302:
    case 310:
    case 311:
    case 312:
    case 313:
    case 314:
    case 321:
      return 'wi-showers';

    case 500:
    case 501:
    case 502:
    case 503:
    case 504:
      return 'wi-rain';

    case 511:
      return 'wi-rain-mix';

    case 520:
    case 521:
    case 522:
    case 531:
      return 'wi-rain';

    case 600:
    case 601:
    case 602:
    case 611:
    case 612:
    case 615:
    case 616:
    case 620:
    case 621:
    case 622:
      return 'wi-snow';

    case 701:
    case 711:
      return 'wi-smoke';

    case 721:
    case 721:
    case 741:
      return 'wi-fog';

    case 751:
      return 'wi-sandstorm';

    case 761:
      return 'wi-dust';

    case 762:
      return 'wi-volcano';

    case 771:
      return 'wi-strong-wind';

    case 781:
      return 'wi-tornado';

    case 800:
      return 'wi-day-sunny';

    case 801:
    case 802:
      return 'wi-day-cloudy';

    case 803:
    case 804:
      return 'wi-cloudy';

    case 900:
      return 'wi-tornado';

    case 901:
    case 902:
      return 'wi-hurricane';

    case 903:
      return 'wi-snowflake-cold';

    case 904:
      return 'wi-hot';

    case 905:
      return 'wi-strong-wind';

    case 906:
      return 'wi-day-hail';

    default:
      return 'wi-na';

  }
};

module.exports = ({weatherCode}) =>
  <i className={`wi ${iconClassName(weatherCode)}`}></i>
;
