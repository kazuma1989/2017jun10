// Markdown ファイルの投稿 API
const fs = require('fs');
const path = require('path');

const serverPath = require('../server-path.js');

exports.path = '/api/edit/:mdFile';

exports.handler = (req, resp) => {
    console.log(req.params.mdFile);
    console.log(req.body);

    let filePath = path.join(serverPath.data, req.params.mdFile);
    let content = req.body.content;
    fs.writeFile(filePath, content, (error) => {
        if (!error) {
            return;
        }
        console.warn(error);
    });

    resp.send('POST!!\r\n');
};
