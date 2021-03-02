var express = require ('express');
var consign = require('consign');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));

consign().include('./routes').
            then('./controllers').into(app);

app.listen(88, ()=> {
  console.log("Servidor ativo na porta 88.");
})