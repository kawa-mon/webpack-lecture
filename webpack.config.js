const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: 'index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    open: true, // コマンド実行時にブラウザを開くかどうかのオプション
    contentBase: outputPath, //　サーバ立ち上げ時に開くディレクトリ
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
    },
    extensions: ['.js', '.scss'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
}
