const expect = require('chai').expect;
const { FORECAST_UPDATE } = require('../../constants');
const reducer = require('../location');

describe('The location reducer', () => {

  it('returns an initial value', () => {

    const step0 = reducer(undefined, 'DUMMY_ACTION');

    expect(step0).to.deep.equal({});

  });

  it('fold pasts location adding \'city\' as property on FORECAST_UPDATE', () => {

    const step0 = reducer(undefined, {
      type: FORECAST_UPDATE,
      data: {
        city : {
          name: 'London',
          lon: '0'
        }
      }
    });

    expect(step0).to.deep.equal({
      city: 'London',
      name: 'London',
      lon: '0'
    });

  });

});
