const { builtinModules } = require("module");

module.exports = function(application){

application.get(`/`, (req, res)=>{
    application.controllers.index.list(req,res);
  });
 /* application.post(`/`, (req, res)=>{
    application.controllers.index.update(req,res);
  });
  application.put(`/`, (req, res)=>{
    application.controllers.index.put(req,res);
  });
  application.delete(`/`, (req, res)=>{
    application.controllers.index.delete(req,res);
  });
  
  application.patch(`/`, (req, res)=>{
      res.send("OK PATCH")
  });
  */
}