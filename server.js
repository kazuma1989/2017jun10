const express = require('express');
const app = express();

app.use(express.static('./dist'));

app.get('/api/login', (req, resp) => {
    resp.json({
        status: 'ok'
    });
});

const port = 3000;
app.listen(port, () => {
    console.log('app running on port', port);
});
