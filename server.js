const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

app.use('/data', express.static(__dirname + '/data'));
app.use(express.static('dist'));

app.get('/api/login', (req, resp) => {
    resp.json({
        status: 'ok'
    });
});

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

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

const port = 8081;
app.listen(port, () => {
    console.log('app running on port', port);
});
