const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;
const config = require('../../common/webpack');
const { header, headerComponent } = require('../../common/paths');
const pkg = require('./package.json');

module.exports = {
  ...config,
  entry: header,
  output: {
    ...config.output,
    clean: true,
    publicPath: 'auto',
    path: path.resolve(__dirname, 'dist/header')
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf_header',
      runtime: false,
      filename: 'header.js',
      exposes: {
        './app': header,
        './header': headerComponent
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