const bodyParser = require('body-parser');

const mongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
var Schema = mongoose.Schema;

// {date: {day: '3', month: '3', year: '16'} , rounds:[10,34,12,41,41,55,12,33,112,324,234,55,44,2]}

// установка схемы
var resultSchema = new Schema({
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

	var result = new Result({
		date: {
			day: 11,
			month: 5,
			year: 123
		},
		rounds: [213,123,123,123,432,21,43]
	});

	result.save(function(err){
		mongoose.disconnect();  // отключение от базы данных
     
	    if(err) return console.log(err);
	    console.log("Сохранен объект", result);
	})

	console.log('Подключенный путь активирован');
	res.send('Hell');
}