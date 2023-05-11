const routes = require('express').Router();
const contacts = require('./contacts');

routes.use('/', require('./swagger'));
routes.use('/contacts', contacts);
routes.use(
  '/',
  (docData = (req, res) => {
    let docData = {
      documentationURL: '# Pending',
    };
    res.send(docData);
  })
);