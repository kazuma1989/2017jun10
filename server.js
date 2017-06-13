const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

// ビルドした資材を配布する設定
app.use(express.static('dist'));

// Static ファイルが見つからないときは Angular のルーティングを呼び出す
app.get('*', (req, resp) => {
    resp.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Markdown ファイルを呼び出せるようにする
app.use('/data', express.static(__dirname + '/data'));

// JSON による POST リクエストに対応する
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Markdown ファイルの投稿 API
app.post('/api/edit/:mdFile', (req, resp) => {
    console.log(req.params.mdFile);
    console.log(req.body);

    let filePath = path.join(__dirname, 'data', req.params.mdFile);
    let content = req.body.content;
    fs.writeFile(filePath, content, (error) => {
        console.warn(error);
    });

    resp.send('POST!!');
});

// 固定ポートでサーバーを起動
const port = 8081;
app.listen(port, () => {
    console.log('app running on port', port);
});
