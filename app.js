var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


// app.post('/', function(request, response){
//     console.log(request.query);
//     response.send('hello');
// });
var intense = 50

app.get('/lamp',function(req, res){
    // console.log(req.body)
    res.json({Brightness:intense});  
})

app.get('/set', function(req, res){
    console.log(req.query)
    intense = parseInt(req.query.val)
    res.json({Brightness:intense});
});

app.listen(4000, function () {
	console.log('app running on port 4000')
})

var app = express();

