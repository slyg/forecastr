const { USER_QUERY } = require('./constants');

exports.userQuery = query => ({
  type: USER_QUERY,
  query
});
