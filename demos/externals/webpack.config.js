const config = require('../../common/webpack');
const { header, app } = require('../../common/paths');

const common = {
  ...config,
  // SAUCE
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}

module.exports = [{
  ...common,
  entry: {
    header
  }
}, {
  ...common,
  entry: {
    app
  }
}];