const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data_base/connect');

const port = process.env.PORT || 8080;
const app = express();

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes'));

mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on ${port}`);
  }
});

/*
// Mongo function
async function main() {
    //const uri= "mongodb+srv://guerrerogjp:Hola1234@test.scquqm9.mongodb.net/test"
    const uri= `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@test.scquqm9.mongodb.net/test`
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("connected to the database MongoDB")

    } catch (e) {
        console.error(e);
    }finally{
        await client.close();
    }
 
}

main().catch(console.error);
*/