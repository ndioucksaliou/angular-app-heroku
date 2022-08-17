
//Install express server
const express = require('express');
const path = require('path');
const app = express();
const port = Process.env.PORT || 8080;
app.use(express.static(__dirname + "/dist/angular-heroku"));
//Pour retourner n'importe quelle requête dans notre application 
app.get("/*", function(req,res){
    //Pour retourner dans l'application
    res.sendFile(path.join(__dirname + '/dist/angular-heroku/index.html'));
})

// Pour indiquer le port que Heroku a choisit
app.listen(port, ()=>{
    console.log("Server listen to port :" + port);
});