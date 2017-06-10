const express = require('express');
const app = express();

// // the relative path from src/server/server.js
// const staticRoot = path.resolve(__dirname, '../../dist');

// app.use(express.static(staticRoot));
// app.get('/', function (req, res) {
//     res.sendFile('index.html', { root: staticRoot });
// });
app.get('/api/login', (req, resp) => {
    resp.json({
        status: 'ok'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('app running on port', port);
});
