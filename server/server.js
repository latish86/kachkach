const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

// Роутеры
const routes = require('./routes/routes.js')

var Schema = mongoose.Schema;

// для работы с promise
mongoose.Promise = global.Promise;

app.use(express.static('front'));
app.use(cors());
app.use(bodyParser.json());



app.get('/', function (req, res) {
  res.send('asdfasdfd')
})


app.post('/test', function (req, res) {
  let data = req.body
  console.log(req.body);

  // Подключаемся к базе (test название БД. Авторизация отключена.)
  mongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if (err) {
      return console.log(err);
    }

    var collection = db.collection('test');

    collection.insert(data, function (err, result) {
      if (err) {
        return console.log(err);
      }
      console.log(result.ops);
      db.close();
    });
    // взаимодействие с базой данных
    console.log('All ok!!!')
    db.close();
  });  
})
app.post('/delbd', function(req,res){
  mongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if (err) {
      return console.log(err);
    }

    var collection = db.collection('test');

    collection.drop( function (err, result) {
      if (err) {
        return console.log(err);
      }
      console.log(result.ops);
      console.log('Коллекция удалена')
      db.close();
    });    
    db.close();
  }); 
})
app.get('/addresult', routes.addResultRoute)


app.listen(3000, function () {
  console.log('Server Up!');
})