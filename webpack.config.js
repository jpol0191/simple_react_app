const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  mode: 'development',
  devtool: debug ? 'inline-sourcemap' : null,
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  output: {
    path: __dirname + '/src/',
    filename: 'index.min.js',
    publicPath: '/',
  },
  devServer: {
    historyApiFallback: true,
  },
};
