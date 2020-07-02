const express = require('express');
const app = express();
const posts = require('./routes/posts');
const path = require('path');

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin,X-Requested-with,Content-Type,Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS,PATCH");
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join('backend/images')));

app.use('/api/posts', posts);

module.exports = app;