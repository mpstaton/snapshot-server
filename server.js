const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


const Person = require('./models/Person');
// Mongo
mongoose.connect('mongodb://localhost/snapshotServer');

app.use('/', (req, res) => {
  Person.create({givenName:'Corey Harrilal'}, function (err, person) {
    if (err) return handleError(err);
    console.log('person saved');
    res.send(person);
  });
});

mongoose.Promise = require('bluebird');
var mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/snapshotServer';

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true,
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);
  console.log("Mongoose connected.");
  return mongoose;
};

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Route Not Found');
  err.status = 404;
  next(err);
});

// error handlers
//need to figure out error handling
// app.listen(3000, () => {
//   console.log('Example app listening on port 3000!')
// });

// app.set('port', (process.env.PORT || 3000));
//
// //Start Server
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });


app.listen(process.env.PORT || 3000, function() {
  console.log('Node app is running on port', app.get('port'));
});
module.exports = app;
