# webpack-lecture

Webpack レクチャー

## 開発環境

- Node.js v14.6.0
- npm v7.6.3

## 各種設定について

### package.json

`$ npm init -y` で自動生成される。

### webpack

公式：https://webpack.js.org/

- 各 JS,CSS,img 等の各モジュールを統合（バンドル）して管理する役割なので **モジュールバンドラー** と呼ばれる。
- 今回は異なる環境の人にレクチャーするために `$ npm install --save-dev webpack@4.43.0` でバージョン固定する。
- `--save-dev` オプションをつけることで開発環境だけで動くようになる。
- `$ npx webpack --mode development` でバンドルできる。

### webpack-cli

- コマンドラインから webpack を実行するためのパッケージ。
- `$ npm install --save-dev webpack-cli@3.3.11` でバージョン固定する。

### live-server

- node のライブリロード機能があるサーバパッケージ
- `$ npm install --save-dev live-server@1.2.1` でバージョン固定する。
- `$ ./node_modules/.bin/live-server [ファイルパス]` の相対パスでライブサーバを立ち上げられる。
- が、面倒くさいということもあり、最新の環境では `$ npx live-server [ファイルパス]` でも可能になっている。

### webpack.config.js

- node.js は CommonJS の規格で動いているので `module.exports` のオブジェクト形式で記載する。
- 出力先はデフォルトでは dist ディレクトリ。
- 出力先は絶対パスで指定するので　 path ライブラリの require が必要。
  - 参考：https://webpack.js.org/configuration/
  ```
  the target directory for all output files must be an absolute path (use the Node.js path module)
  ```

### webpack-dev-server

- webpack によるバンドルと live-server によるサーバ立ち上げを一度に行える**本命ツール**。
- `$ npm install --save-dev webpack-dev-server@3.1.14` でバージョン固定する。
- `$ npx webpack-dev-server` で実行できる。

## 開発環境と本番環境について

| Mode           | Development | Production |
| :------------- | :---------- | :--------- |
| 圧縮           | 無          | 有         |
| ビルド時間     | 短          | 長         |
| パフォーマンス | 悪          | 良         |

## loader について

JavaScript 以外のファイルを JavaScript として扱うためのもの。

**A chain is executed in reverse order.** つまり、**下から順に実行される！**
https://webpack.js.org/concepts/loaders/#loader-features

### css-loader

- CSS ファイルを読み込み可能な形式に変換する。

### style-loader

- 読み込み可能な形式に変換された CSS を style タグに生成し直す。

### sass-loader

- sass ファイルを読み込む。

### node-sass

- sass を css に変換する。

### postcss-loader

- CSS に autoprefix, stylelint などの処理を加えるときのフレームワーク。
- autoprefix を用いることでトランスパイル時にベンダープレフィックスが付与される。

## resolve

- alias オプション：相対パスのエイリアスを指定できる。
- extensions オプション：記載を省略したい拡張子を指定できる。
- modules オプションは初期値 `['node_modules']`。配列にパスを追加することで探索先を増やせる。

## Plugins

### Babel

- トランスパイラ
- モダンな JS の種々記法をどんなブラウザでも解釈できる記法に変換してくれる

### babel-loader

- @babel/core API を webpack が叩くためのもの

### @babel/core

- トランスパイルするためのもの

### @babel/preset-env

- ES2015 以上のトランスパイラ
