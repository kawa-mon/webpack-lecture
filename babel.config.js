module.exports = (api) => {
  api.cache(true)

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: [
            '> 0.5%',
            'last 2 versions',
            'ie >= 11',
            'Android >= 4',
          ],
          useBuiltIns: 'usage', // 必要な機能だけをインポートすることでバンドルファイルサイズを小さくできる
          corejs: 3, // useBuiltIns を指定するときに必要
        },
      ],
    ],
  }
}
