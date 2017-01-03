const expect = require('chai').expect;
const selector = require('../forecastSelector');
const fixture = require('./fixture');

describe('the forecast selector', () => {

  it('exists', () => {
    expect(selector).to.be.a('function');
  });

  it('returns an object with \'forecast\', \'location\' and \'isLoading\' attributes', () => {
    const res = selector({
      forecast: [],
      apiStatus: {},
      location: {}
    });
    expect(res).to.be.an('object');
    expect(res).to.have.property('forecast');
    expect(res).to.have.property('location');
    expect(res).to.have.property('isLoading');
  });

  it('selects city informations', () => {

    const location = { city: 'Nuuk', country: 'GR' };

    const res = selector({
      forecast: [],
      apiStatus: {},
      location
    });

    expect(res.location).to.deep.equal(location);

  });

  it('selects loading state', () => {

    const apiStatus = { isLoading: false };

    const res = selector({
      forecast: [],
      location: {},
      apiStatus
    });

    expect(res.isLoading).to.deep.equal(false);

  });

  it('reduces forecast into an array with values grouped per day', () => {

    const res = selector({
      forecast: fixture.list,
      location: {},
      apiStatus: {}
    });

    expect(res.forecast.length).to.equal(5);

    const expectedDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    expect(
      res.forecast.some(({day}, index) => day !== expectedDays[index])
    ).to.eql(false);

  });

  it('selects only day hours forecast values', () => {

    const res = selector({
      forecast: fixture.list,
      location: {},
      apiStatus: {}
    });

    const isNightTime = ({time}) => time === '6:00' || time === '21:00';

    expect(res.forecast.some(
      ({forecastPerDay}) => forecastPerDay.some(isNightTime)
    )).to.eql(false);

  });

  it('provides correct keys in returned Array<ForecastPerDay>', () => {

    const res = selector({
      forecast: fixture.list,
      location: {},
      apiStatus: {}
    });

    const hasCorrectKeys = (forecast) => {
      expect(forecast).to.have.property('weatherCode').that.is.a('number');
      expect(forecast).to.have.property('avgTemp').that.is.a('number');
      expect(forecast).to.have.property('hour').that.is.a('number');
      expect(forecast).to.have.property('time').that.is.a('string');
      expect(forecast).to.have.property('day').that.is.a('string');
    }

    res.forecast.forEach(
      ({forecastPerDay}) => forecastPerDay.forEach(hasCorrectKeys)
    );

  });

});
