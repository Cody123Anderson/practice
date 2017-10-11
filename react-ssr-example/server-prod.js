const express = require('express');
const path = require('path');
const app = express();

const ServerRenderer = require('./static/server.js').default;
const Stats = require('./static/stats.json');

app.use('/static', express.static(path.join(__dirname, './static')))
app.use(ServerRenderer(Stats));

app.listen(3000);
