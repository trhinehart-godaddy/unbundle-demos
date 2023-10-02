const config = require('../../common/webpack');
const { header, app } = require('../../common/paths');

const common = {
  ...config,
  // SAUCE
  experiments: {
    outputModule: true
  },
  output: {
    ...config.output,
    library: {
      type: 'module'
    }
  },
  externals: {
    'react': `module react@^17`,
    'react-dom': `module react-dom@^17`
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