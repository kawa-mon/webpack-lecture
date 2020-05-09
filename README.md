# webpack-lecture

Webpack レクチャー

## 開発環境

- Node.js v13.11.0
- npm v6.14.5

## 各種設定について

### package.json

`$ npm init -y` で自動生成される

### webpack

公式：https://webpack.js.org/

- 各 JS,CSS,img 等の各モジュールを統合（バンドル）して管理する役割なので **モジュールバンドラー** と呼ばれる。
- 今回は異なる環境の人にレクチャーするために `$ npm install --save-dev webpack@4.43.0` でバージョン固定する。
- `--save-dev` オプションをつけることで開発環境だけで動くようになる。
- `$ npx webpack --mode development` でバンドルできる

### webpack-cli

- コマンドラインから webpack を実行するためのパッケージ
- `$ npm install --save-dev webpack-cli@3.3.11` でバージョン固定する。

### live-server

- node のライブリロード機能があるサーバパッケージ
- `$ npm install --save-dev live-server@1.2.1` でバージョン固定する。
- `$ ./node_modules/.bin/live-server [ファイルパス]` の相対パスでライブサーバを立ち上げられる。
- が、面倒くさいということもあり、最新の環境では `$ npx live-server [ファイルパス]` でも可能になっている。

### webpack.config.js

- node.js は CommonJS の規格で動いているので `module.exports` のオブジェクト形式で記載する
- 出力先はデフォルトでは dist ディレクトリ
- 出力先は絶対パスで指定するので　 path ライブラリの require が必要
  - 参考：https://webpack.js.org/configuration/
  ```
  the target directory for all output files must be an absolute path (use the Node.js path module)
  ```
