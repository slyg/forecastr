const expect = require('chai').expect;
const { USER_QUERY, FORECAST_UPDATE, SERVER_ERROR } = require('../../constants');
const reducer = require('../apiStatus');

describe('The apiStatus reducer', () => {

  it('returns an initial value', () => {

    const step0 = reducer(undefined, 'DUMMY_ACTION');

    expect(step0).to.deep.equal({
      hasFailed: false,
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
      hasFailed: false,
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

  it('sets hasFailed to true on SERVER_ERROR', () => {

    const step0 = reducer(undefined, {
      type: SERVER_ERROR
    });

    expect(step0.hasFailed).to.equal(true);

  });

  it('sets hasFailed to false on after FORECAST_UPDATE', () => {

    const step0 = reducer(undefined, {
      type: SERVER_ERROR
    });

    const step1 = reducer(step0, {
      type: FORECAST_UPDATE
    });

    expect(step1.hasFailed).to.equal(false);

  });

});
