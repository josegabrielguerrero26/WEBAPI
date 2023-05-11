const routes = require('express').Router();
const temples = require('../controllers/contacts');

routes.get('/', contact.findAll);
routes.get('/:contact_id', temples.findOne);

routes.post('/', contact.create);

module.exports = routes;
