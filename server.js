const express = require('express');
const path = require ('path')
const app = express();
app.use(express.static(__dirname+ '/dist/automate-ang'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/automate-ang/src/index.html'));
});
//app.listen(process.env.PORT || 8080);


// var server = app.listen(process.env.PORT || 5000), function() {
//     var port = server.address().port;
//     console.log("Express is working on port " + port);
// });


var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });