const expect = require('chai').expect;
const { USER_QUERY, FORECAST_UPDATE } = require('../../constants');
const reducer = require('../apiStatus');

describe('The apiStatus reducer', () => {

  it('returns an initial value', () => {

    const step0 = reducer(undefined, 'DUMMY_ACTION');

    expect(step0).to.deep.equal({
      isLoading: true,
      query: ''
    });

  });

  it('fold pasts user queries and sets loading to true on USER_QUERY', () => {

    const step0 = reducer(undefined, {
      type: USER_QUERY,
      query: 'nuu'
    });

    const step1 = reducer(step0, {
      type: USER_QUERY,
      query: 'nuuk'
    });

    expect(step1).to.deep.equal({
      isLoading: true,
      query: 'nuuk'
    });

  });

  it('sets loading to false on FORECAST_UPDATE', () => {

    const step0 = reducer(undefined, {
      type: FORECAST_UPDATE
    });

    expect(step0.isLoading).to.equal(false);

  });

});
