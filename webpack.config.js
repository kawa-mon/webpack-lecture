const path = require('path')

const outputPath = path.resolve(__dirname, 'dist')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: outputPath,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    open: true, // コマンド実行時にブラウザを開くかどうかのオプション
    contentBase: outputPath, //　サーバ立ち上げ時に開くディレクトリ
  },
}
