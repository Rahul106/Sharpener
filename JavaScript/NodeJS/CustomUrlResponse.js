// Import the http module
const http = require('http');

//Get the URL hit from Browser;
const url = require('url');

// Your Greeting
const commonWelcomeMessage = 'Welcome';

// Create a server and listen on port 4000
const server = http.createServer((req, res) => {
 
  // Set the response header
  res.setHeader('Content-Type', 'text/html');
  
  // Get the URL pathname from the request
  const path = url.parse(req.url).pathname;

  let data = '<html><head></head><body>' + commonWelcomeMessage + ' ';
  
  // Set greetInfo based on the URL
  let greetInfo = '';
  if(path === '/home') {
    greetInfo = 'home\n';
  } else if(path === '/about') {
    greetInfo = 'to About Us page\n';
  } else if(path === '/node') {
    greetInfo = 'to my Node Js project\n';
  } else {
    greetInfo = 'Page Not Found\n';
  }

  // Concatenate the greetInfo to the response data
  data += greetInfo + '</body></html>';
  
  // Send the response
  res.write(data);
  
  // End the response
  res.end();
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
