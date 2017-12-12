const bodyParser = require('body-parser');

const config = require('../config');
const moment = require('moment');

const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// установка схемы
var resultSchema = new Schema({
    user: String,
    date: { 
      day: Number,
      month: Number,
      year: Number
    },
    rounds: Array
});

exports.addResultRoute = function(req, res){

  mongoose.connect("mongodb://latish86:oc87kWhd@cluster0-shard-00-00-7fcuc.mongodb.net:27017,cluster0-shard-00-01-7fcuc.mongodb.net:27017,cluster0-shard-00-02-7fcuc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");

  var Result = mongoose.model('Result', resultSchema);
  
  let data = req.body

  var result = new Result({
    user: data.user,
    date: {
      day: data.date.day,
      month: data.date.month,
      year: data.date.year
    },
    rounds: data.results
  });

  result.save(function(err){
    mongoose.disconnect();  // отключение от базы данных
     
      if(err){
        res.json({
          message: err
        })
        return console.log(err);
      }else{
        res.json({
          message: 'Succes'
        })
        console.log("Объект успешно сохранен...", result);
      } 
      
  });
}

exports.getResultsRoute = function(req, res){
  var data = req.body;
  var user = data.user; // Пользователь

  if(data.type == '30day'){
    mongoose.connect("mongodb://latish86:oc87kWhd@cluster0-shard-00-00-7fcuc.mongodb.net:27017,cluster0-shard-00-01-7fcuc.mongodb.net:27017,cluster0-shard-00-02-7fcuc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");
   
    var Result = mongoose.model('Result', resultSchema);
     
    Result.find({user: data.user}, function(err, docs){
        mongoose.disconnect();
         
        if(err) return console.log(err);

        if (docs.length == 0 ){
          console.log('Пустой результат запроса...')
		  res.json(docs);		
        }else{       
          res.json(docs);
        }
        
    });
  }else if(data.type == 'month'){
    mongoose.connect("mongodb://latish86:oc87kWhd@cluster0-shard-00-00-7fcuc.mongodb.net:27017,cluster0-shard-00-01-7fcuc.mongodb.net:27017,cluster0-shard-00-02-7fcuc.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin");
   
    var Result = mongoose.model('Result', resultSchema);

    if(data.params.month<10){
      data.params.month = '0'+ data.params.month
    }

    console.log('Month: '+data.params.month)
    
    let date = moment(data.params.year+"-"+data.params.month, "YYYY-MM");
    console.log('Количество дней в месяце: '+date.daysInMonth());

    Result.find({user: data.user,
                 'date.year' : data.params.year,
                 'date.month': data.params.month,
                 'date.day'  : { $gte: 1, $lte: date.daysInMonth() }
                }, function(err, docs){
        mongoose.disconnect();
         
        if(err) return console.log(err);

        if (docs.length == 0 ){
          console.log('Пустой результат запроса... по месяцам');
		  res.json(docs);	
        }else{       
          console.log('Получено документов: '+ docs.length)
          res.json(docs);
        }
    });
  }
}

exports.updateOneResultRoute = function(req, res){
  var data = req.body;
  var user = data.user; // Пользователь

  // console.log(data);

  mongoose.connect(config.DBConnectURI);

  var Result = mongoose.model('Result', resultSchema);

  Result.findById(data.id, function(err, day){
    if(err) throw err;
    day.rounds = data.rounds;
    day.save(function(err,){
      if (err) throw err;
      console.log('Udate succeful');
    })
  })
  
}