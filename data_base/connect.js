const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
const uri= `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test.scquqm9.mongodb.net/test`
const client = new MongoClient(uri);


const initDb = (callback) => {
  if (client) {
    console.log('Db is already initialized!');
    return callback(null, client);
  }
  MongoClient.connect(process.env.MONGODB_URI)
    .then((client) => {
        client = client;
      callback(null, client);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!client) {
    throw Error('Db not initialized');
  }
  return client;
};

module.exports = {
  initDb,
  getDb,
};