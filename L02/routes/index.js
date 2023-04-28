const router = require('express').Router();

const name= require('../controllers')

router.get('/test1', name.test1);
router.get('/test2', name.test2);
router.get('/contacts', require('./contacts'))




module.exports = router;