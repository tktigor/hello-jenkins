var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello Andeol');
});
 
app.listen(process.env.PORT || 5010);
 
module.exports = app;
