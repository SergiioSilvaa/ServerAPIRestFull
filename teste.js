var conexao = require("./data/conexao.js");
var con = conexao.getConexao();

con.query('select * from usuario', (error, result, fields)=>{
    console.log(result);
})