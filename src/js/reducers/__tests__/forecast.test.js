const expect = require('chai').expect;
const { FORECAST_UPDATE } = require('../../constants');
const reducer = require('../forecast');

describe('The forecast reducer', () => {

  it('returns an initial value', () => {

    const step0 = reducer(undefined, 'DUMMY_ACTION');

    expect(step0).to.deep.equal([]);

  });

  it('fold pasts raw forecasts on FORECAST_UPDATE', () => {

    const step0 = reducer(undefined, {
      type: FORECAST_UPDATE,
      data: {
        list: ['hello']
      }
    });

    const step1 = reducer(step0, {
      type: FORECAST_UPDATE,
      data: {
        list: ['world']
      }
    });

    expect(step1).to.deep.equal(['world']);

  });

});
