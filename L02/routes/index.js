const routes = require('express').Router();

const myController= require('../controllers')

routes.get('/', myController.test1)
routes.get('/test2', myController.test2)

module.exports = routes;