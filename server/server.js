var express = require('express');
var app = express();

app.use(express.static('front'));

app.get('/', function(req,res){
  res.send('asdfasdfd')
})

app.listen(3000, function(){
  console.log('Server Up!');
})