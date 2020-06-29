const express = require('express');
const path = require ('path')
const app = express();
app.use(express.static(__dirname+ '/automate-ang'));
app.get('/*',function(req,res){
    console.log(__dirnam)
    res.sendFile(path.join(__dirname+'/automate-ang/src/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });