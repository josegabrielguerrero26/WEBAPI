const dbConfig = require('../db/contacts.json');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.contact = require('./contact.js')(mongoose);

module.exports = db;