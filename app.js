const express = require('express');
const app = express();
// res means response!

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const postRoutes = require('./api/routes/posts');


app.use('/posts', postRoutes);
module.exports = app;