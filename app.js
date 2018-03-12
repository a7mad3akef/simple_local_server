var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());


// app.post('/', function(request, response){
//     console.log(request.query);
//     response.send('hello');
// });

app.get('/lamp',function(req, res){
    // console.log(req.body)
    res.json({'Brightness':50});  
})

app.listen(4000, function () {
	console.log('app running on port 4000')
})

var app = express();

