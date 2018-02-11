const express = require('express');

//Set up exress app
const app = express();

//Listen for requests
app.listen(process.env.port || 4000, function(){ //if port is specified then it uses that or else it uses port 4000
  console.log('Now listening for requests');
});
