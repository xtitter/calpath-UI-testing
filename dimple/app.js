var express = require('express');
var app = express();
var serveIndex = require('serve-index');
var path = require('path');


app.use('/', serveIndex(path.join(__dirname, "/"), {'icons':true}));
app.use('/', express.static(__dirname));

app.listen(process.env.PORT || 3000);