const express = require('express');
//const routes = require('./routes/api');
//^This has been directly implemented in line 8

//Set up exress app
const app = express();

//Initialize routes
app.use('/api',require('./routes/api'));

app.get('/api', function(req, res){
  console.log('GET Request');
  res.send({name: 'Yoshi'});
});

//Listen for requests
app.listen(process.env.port || 4000, function(){ //if port is specified then it uses that or else it uses port 4000
  console.log('Now listening for requests');
});
