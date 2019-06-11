const { Router } = require('express');
const Note = require('../models/Note');

module.exports = Router()
  .post('/', (req, res, next) => {
    const { title, body } = req.body;
    Note
      .create({ title, body })
      .then(data => res.send(data))
      .catch(next);
  })
  .get('/', (req, res, next) => {
    Note
      .find()
      .then(data => res.send(data))
      .catch(next);
  });
