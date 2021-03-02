module.exports.list = function(req,res) {
    res.setHeader("Access-Control-Allow-Origin","*");

    res.send('[{id:1,mensagem: "Olá Mundo"}]');
    

}