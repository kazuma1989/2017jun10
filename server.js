const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const serverPath = require('./server-path.js');

const app = express();

// JSON による POST リクエストに対応する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// 固定ポートでサーバーを起動
const port = 8081;
app.listen(port, () => {
    console.log('app running on port', port);
});

// api フォルダー内のモジュールを全て読み込み POST メソッドと紐付ける
fs.readdirSync(serverPath.api).forEach(filename => {
    let api = require(path.join(serverPath.api, filename));
    app.post(api.path, api.handler);
});

// Markdown ファイルを呼び出せるようにする
app.use('/data', express.static(serverPath.data));

// ビルドした資材を配布する設定
// 静的ファイルに対応する URL でないときは Angular のルーティングを呼び出す
app.use(express.static(serverPath.dist));
app.get('*', (req, resp) => {
    resp.sendFile(path.join(serverPath.dist, 'index.html'));
});
