// Import the http module
const http = require('http');

// Your name
const yourName = "Rahul Rajkumar Gupta";

// Create a server and listen on port 4000
const server = http.createServer((req, res) => {
  // Log your name in the server console
  console.log(yourName);

  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send your name as the response
  res.end(yourName);
});

// Listen on port 4000
server.listen(4000, () => {
  console.log(`Server is running on http://localhost:4000`);
});
