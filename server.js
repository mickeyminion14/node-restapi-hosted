const express = require('express');
const app = express();

const apiEndpoints = require('./app/routes');
app.set('view engine', 'html');
app.use('/', apiEndpoints);
const PORT = process.env.PORT || 6900;
const HOST = process.env.host || '0.0.0.0';
app.use(express.json());
app.use(express.static('./public'));

app.listen(PORT, function () {
    console.log("server running on https://" + HOST + ":" + PORT + "/");
});