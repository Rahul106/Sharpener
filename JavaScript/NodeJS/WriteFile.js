// Import required modules
const http = require('http');
const fs = require('fs');

// Create a server and listen on port 4000
const server = http.createServer((req, res) => {
  // Extract the URL and HTTP method from the request
  const url = req.url;
  const method = req.method;

  // Set the response header
  res.setHeader('Content-Type', 'text/html');

  // If the URL is "/", display a form for entering a message
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body>');
    res.write('<form action="/messageInfo" method="POST">');
    res.write('<input type="text" name="message">');
    res.write('<button type="submit">Send</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // If the URL is "/messageInfo" and the HTTP method is POST, store the message in a file
  if (url === '/messageInfo' && method === 'POST') {
    const body = [];
    // Event listener to capture data chunks from the request body
    req.on('data', chunk => {
      body.push(chunk);
    });
    // Event listener to handle end of data transmission
    return req.on('end', () => {
      // Concatenate and parse the data chunks to extract the message
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      // Write the message to a file named 'chatmsg.txt'
      fs.writeFile('chatmsg.txt', message, err => {
        // Set response status code to 302 (Found) and redirect to the homepage
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

// Start the server and listen on port 4000
server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
