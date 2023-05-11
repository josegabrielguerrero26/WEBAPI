const routes = require('express').Router();
const contact = require('../controllers/contact.js');

routes.get('/', contact.findAll);
routes.get('/:contact_id', contact.findOne);

routes.post('/', contact.create);

module.exports = routes;
