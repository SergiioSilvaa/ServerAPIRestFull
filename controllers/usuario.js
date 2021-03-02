module.exports.obter = function(application, req, res){
var con = application.data.conexao.getConexao();
con.query("SELECT * FROM usuario", (error, results, fields)=>{
    console.log(results);
});
};