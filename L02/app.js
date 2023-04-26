var express= require('express');
var app = express();
const{MongoClient}= require('mongodb'); // Mongo conection

var port= process.env.PORT || 3000;



app.use('/', require('./routes'));
app.listen(port, ()=> {
    console.log("Server is running on port " + port);
});


// Mongo function
async function main() {
    const uri= "mongodb+srv://guerrerogjp:Hola1234@test.scquqm9.mongodb.net/test"
    const client = new MongoClient(uri);

    try {
        await client.connect();

    } catch (e) {
        console.error(e);
    }finally{
        await client.close();
    }
 
}

main().catch(console.error);

