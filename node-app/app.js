var http = require('http');
var fs = require('fs');
var url = require('url');

var commonHeaders = {'Content-Type': 'text/html'};
var cssHeaders = {'Content-Type': 'text/css'};
var jsHeaders = {'Content-Type': 'text/javascript'};
//Function to return HTML response
function renderHTML(path, response){
  response.writeHead(200, {'Content-Type' : 'text/html'});
  fs.readFile(path, null, function(error, data) {
    if(error){
      response.writeHead(404);
      response.write('File not found');
    }else{
      response.write(data);
    }
    response.end();
  })
}

//Function to return CSS response
function renderCSS(path, response){
  response.writeHead(200, {'Content-Type' : 'text/css'});
  fs.readFile(path, null, function(error, data) {
    if(error){
      response.writeHead(404);
      response.write('File not found');
    }else{
      response.write(data);
    }
    response.end();
  })
}

//Function to return JS response
function renderJS(path, response){
  response.writeHead(200, {'Content-Type' : 'text/javascript'});
  fs.readFile(path, null, function(error, data) {
    if(error){
      response.writeHead(404);
      response.write('File not found');
    }else{
      response.write(data);
    }
    response.end();
  })
}

module.exports = {
  handleRequest: function(request, response){
  response.writeHead(200, {'Content-Type' : 'text/html'});

  var path = url.parse(request.url).pathname;

  switch(path){
    case '/':
      renderHTML('./index.html', response);
      break;
    case '/css/styles/':
      renderCSS('./css/style.css', response);
      break;
    case '/js/script/':
      renderJS('./js/script.js', response);
      break;
    case '/js/ajax-publish-call/':
      renderJS('./js/script.js', response);
      break;


  }

  }
}
