require('../css/main.scss');

const Root = require('./containers/Root.jsx');
const store = require('./store');

// Connect React dom render to redux store
setTimeout(() => Root('content', store), 100);
