var express = require('express');
var cors = require('cors');
var app = express();

app.use(express.static('front'));
app.use(cors());



app.get('/', function(req,res){
  res.send('asdfasdfd')
})

// app.get('/test', function(req,res){
//   var data = {
//     'protocol': req.protocol, // Протокол запроса
//     'body' : req.body,  // ???
//     'params' : req.params, // ???
//     'hostname' : req.hostname, // Имя хоста
//     'originalUrl':req.originalUrl, // Полный
//     'query': req.query // JSON с параметрами
//   }

//   res.type('html').set({
//     'Access-Control-Allow-Origin': '*', // Вот это нужно для кросдоменного запроса.
//   }).json(data);
// })






app.post('/test',  cors() ,function(req,res){
  var data = {
    'protocol': req.protocol, // Протокол запроса
    'body' : req.body,  // ???
    'params' : req.params, // ???
    'hostname' : req.hostname, // Имя хоста
    'originalUrl':req.originalUrl, // Полный
    'query': 'sasdasadds' // JSON с параметрами
  }

  res.type('html').set({
    'Access-Control-Allow-Origin': '*', // Вот это нужно для кросдоменного запроса.
    'Access-Control-Allow-Headers': 'origin, content-type, accept',
    "Access-Control-Allow-Methods": "*"
  }).json(data);

})


app.listen(3000, function(){
  console.log('Server Up!');
})