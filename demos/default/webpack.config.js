const config = require('../../common/webpack');
const { header, app } = require('../../common/paths');

module.exports = [{
  ...config,
  entry: {
    header
  }
}, {
  ...config,
  entry: {
    app
  }
}];