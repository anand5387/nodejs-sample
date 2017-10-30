const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const port = 3000;

// TODO Implement your code here.
// You can use the sample data here: https://demo2697834.mockable.io/movies
// or use your own data

require('./app/routes')(app, {});
app.listen(port, () => {
  console.log('We are live on ' + port);
});