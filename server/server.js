var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static('front'));
app.use(cors());
app.use(bodyParser.json());



app.get('/', function(req,res){
  res.send('asdfasdfd')
})


app.post('/test',  function(req,res){
  var data = {
    'protocol': req.protocol, // Протокол запроса
    'body' : req.body,  // ???
    'params' : req.params, // ???
    'hostname' : req.hostname, // Имя хоста
    'originalUrl':req.originalUrl, // Полный
    'query': 'sasdasadds' // JSON с параметрами
  }

  res.send(data);

})


app.listen(3000, function(){
  console.log('Server Up!');
})