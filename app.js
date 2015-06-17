var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello Igo');
});
 
app.listen(process.env.PORT || 5010);
 
module.exports = app;
