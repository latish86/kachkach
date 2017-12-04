const bodyParser = require('body-parser');

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
     
	    if(err) return console.log(err);
	    console.log("Объект успешно сохранен...", result);
	});
}

exports.getResultsRoute = function(req, res){
  var data = req.body;
  var user = data.user; // Пользователь

  if(data.type == '30day'){
    console.log('Пользователь: '+ data.user);
    console.log('30 дней');
  }else if(data.type == 'month'){
    console.log('Пользователь: '+ data.user);
    console.log('Месяц: '+ data.params.month)
  }

}