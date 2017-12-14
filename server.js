//
// # Magic 8 Ball server
//
var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'client')));

var responses = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
]

/**
 * REST method to get 8-ball's answer
 */
router.get('/getAnswer', (request, response) => {
  var index = Math.random() * responses.length;
  index = Math.trunc(index);
  console.log("getAnswer: index " + index + " response: " + responses[index]);
  response.status(200).send({
    response: responses[index]
  })
});

// setup the HTML server so that it can process requests to load index.html (and any other webpages)
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("8 ball server listening at", addr.address + ":" + addr.port);
});
