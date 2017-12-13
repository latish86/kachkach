const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');

// Роутеры
const routes = require('./routes/routes.js');

// Файл с конфигурацией приложения
const config = require('./config');

var Schema = mongoose.Schema;

// для работы с promise
mongoose.Promise = global.Promise;

app.use(express.static('front', {index: 'index.html'}));
app.use(cors());
app.use(bodyParser.json());




////// НАХРЕНА ОНО НУЖНО  ///////////////////////
app.post('api/test', function (req, res) {
  let data = req.body
  console.log(req.body);
  // Подключаемся к базе (test название БД. Авторизация отключена.)
  mongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
    if (err) {
      console.log('Ошибка подключения к БД...')
      return console.log(err);
    }

    var collection = db.collection('test');

    collection.insert(data, function (err, result) {
      if (err) {
        console.log('Ошибка операции Insert...')
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
//////////////////////////////////////////////////


app.post('/delbd', routes.clearDBRoute);
app.post('/addresult', routes.addResultRoute);
app.post('/getresult', routes.getResultsRoute);
app.post('/updateOneResult', routes.updateOneResultRoute);
app.listen(3000, function () {
  console.log('Server Up!');
})