const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const config = require('../../common/webpack');
const pkg = require('./package.json');

module.exports = {
  ...config,
  entry: {
    app: './src/index.js'
  },
  output: {
    ...config.output,
    clean: true,
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist/app')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf_app',
      remotes: {
        '@mf/header': 'mf_header@https://localhost/demos/federation/dist/header/header.js'
      },
      shared: {
        'react': {
          singleton: true,
          requiredVersion: pkg.devDependencies['react']
        },
        'react-dom': {
          singleton: true,
          requiredVersion: pkg.devDependencies['react-dom']
        }
      }
    })
  ]
}