const express = require('express');
const path = require ('path')
const app = express();
console.log(__dirname)
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+ '/dist/automateAng'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/automateAng/index.html'));
});

var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });