var express=require('express')
var bodyParser = require('body-parser')
var shell = require('shelljs');

var app = express()
app.use(bodyParser.json());

app.post('/payload', function (req, res) {
  res.send(req.body);
  require('simple-git')('/home/lasso-marko-startkit').pull(function(err, update){
    if (update) {
      console.log(update);
      shell.exec('systemctl restart lasso');
    }
  });
})

app.listen(11111, function () {
  console.log('Mediator listening on port 11111!')
})
