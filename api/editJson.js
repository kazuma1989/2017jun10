// JSON の投稿 API
const fs = require('fs');
const path = require('path');

const serverPath = require('../server-path.js');

exports.path = '/api/editJson/:jsonFile';

exports.handler = (req, resp) => {
    let filePath = path.join(serverPath.data, req.params.jsonFile);
    let content = JSON.stringify(req.body.content, null, 4);
    fs.writeFile(filePath, content, (error) => {
        if (!error) {
            return;
        }
        console.warn(error);
    });

    resp.send('POST!!\r\n');
};
