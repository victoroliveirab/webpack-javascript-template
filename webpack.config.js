const path = require('path');

const entryFile = './src/index.js';
const outDir = './www';

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    main: entryFile,
  },
  output: {
    path: path.resolve(__dirname, outDir),
    filename: 'index.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js'],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
