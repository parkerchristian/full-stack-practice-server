const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1/notes', require('./routes/notes.js'));

module.exports = app;
