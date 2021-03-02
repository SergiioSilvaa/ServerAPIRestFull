module.exports = function(application){
    application.get('/usuario', function(req,res){
        application.controller.usuario.get(application, req, res);
    });
}