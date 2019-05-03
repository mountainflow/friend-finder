const app = require ('express');

app.get('/', function(req, res){
res.sendFile (path.join(___dirname, 'home.html'));
});

app.get('/survey', function(req, res){

});
