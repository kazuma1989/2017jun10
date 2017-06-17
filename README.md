# Web ベースの手順書と開発ツール

## 利用者

`yarn start:dist` で Angular ビルド後 Express サーバーが起動する。

`http://localhost:8081/` で表示する。

## 開発者

`yarn start` で Express サーバーを起動する。  
`yarn serve` で Angular CLI 開発サーバーを起動する。

`http://localhost:4200/` で表示する。  
特定の URL は 8081 ポートにプロキシーされ Express サーバーにリクエストが送られる。
