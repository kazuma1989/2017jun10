const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

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

    fs.writeFile(path.join(__dirname, 'dist', req.params.mdFile), req.body.content);

    resp.send('POST!!');
});

const port = 8081;
app.listen(port, () => {
    console.log('app running on port', port);
});
