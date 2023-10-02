module.exports = {
  target: 'web',
  mode: 'production',
  output: {
    filename: '[name].js',
    chunkFilename: pathData => {
      return `${pathData.chunk.runtime}/[name].js`;
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    }]
  }
}
