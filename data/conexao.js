var mysql = require('mysql');
var conexao = function(){
    return mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ServerRestFull'
});
};

module.exports.getConexao = conexao;
