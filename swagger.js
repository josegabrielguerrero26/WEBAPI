const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API documentation',
    description: 'MongoDb with contacts'
  },
  host: 'localhost:8080',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);